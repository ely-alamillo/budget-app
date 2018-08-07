import React from 'react';
import axios from 'axios';
import { Component } from 'react';

import ButtonToolbar from './ButtonToolbar/ButtonToolbar';
import Dashboard from './Dashboard/Dashboard';

import './Home.css';

const baseUrl = 'http://localhost:4000/api';
const defaultState = {
  budgets: {},
  selectedBudget: { expenses: [] },
  stats: {},
  createDisabled: false,
  expenseDisabled: true,
  showTransDisabled: true
};

class Home extends Component {
  // state = testState;
  componentWillMount() {
    this.setState(defaultState);
  }

  componentDidMount() {
    const requests = [this.getBudgets(), this.getExpenses()];

    Promise.all(requests)
      .then(([budgetData, expensesData]) => {
        const { budgets } = budgetData.data;
        const { expenses } = expensesData.data;
        const showTrans = expenses.length > 0 ? false : true;

        console.log({ budgets, expenses });
        if (budgets.length < 1) {
          void 0;
        } else {
          const budget = { ...budgets[0], expenses };

          this.setState(
            {
              ...this.state,
              budgets: {
                [budgets[0].budgetName]: budget
              },
              selectedBudget: { ...budget },
              createDisabled: true,
              expenseDisabled: false,
              showTransDisabled: showTrans
            },
            () => this.calculateSpendingByCat()
          );
        }
      })
      .catch(e => console.log(e));
  }

  getBudgets = () => {
    return axios.get(`${baseUrl}/budgets`);
  };

  getExpenses = () => {
    return axios.get(`${baseUrl}/expenses`);
  };

  createBudget = budget => {
    console.log('set create budget');
    const name = budget.budgetName;
    // console.log(budget);
    axios
      .post(`${baseUrl}/budget`, budget)
      .then(x => {
        console.log('reply', x);
        this.setState({
          ...this.state,
          budgets: { [name]: budget },
          selectedBudget: budget,
          createDisabled: true,
          expenseDisabled: false
        });
      })
      .catch(e => console.log(e));
  };

  addExpense = expense => {
    const { budgetName } = this.state.selectedBudget;
    const { expenses } = this.state.budgets[budgetName];
    axios
      .post(`${baseUrl}/expenses`, expense)
      .then(x => {
        this.setState(
          {
            ...this.state,
            budgets: {
              [budgetName]: {
                ...this.state.budgets[budgetName],
                expenses: [...expenses, expense]
              }
            },
            selectedBudget: {
              ...this.state.selectedBudget,
              expenses: [...this.state.selectedBudget.expenses, expense]
            },
            showTransDisabled: false
          },
          () => this.calculateStats()
        );
      })
      .catch(e => console.log(e));
  };

  calculateStats = () => {
    const { selectedBudget } = this.state;
    const getTotal = (acc, exp) => acc + Number(exp.expenseTotal);
    const expensesTotal = selectedBudget.expenses.reduce(getTotal, 0);

    console.log('stats', this.state);

    this.setState({ ...this.state, stats: { expensesTotal } }, () =>
      this.calculateSpendingByCat()
    );
  };

  calculateSpendingByCat = () => {
    const { selectedBudget } = this.state;
    const getTotal = (total, expense) => {
      const { category, expenseTotal } = expense;
      total[category] =
        Number(expenseTotal) + total[category] || Number(expenseTotal);

      return total;
    };
    const categoryTotal = selectedBudget.expenses.reduce(getTotal, {});

    console.log('stats', this.state);

    this.setState({
      ...this.state,
      stats: { ...this.state.stats, categoryTotal }
    });
  };

  render() {
    return (
      <section className="section" style={{ minHeight: '90vh' }}>
        <ButtonToolbar
          createBudget={this.createBudget}
          addExpense={this.addExpense}
          createDisabled={this.state.createDisabled}
          expenseDisabled={this.state.expenseDisabled}
          showTransDisabled={this.state.showTransDisabled}
          transactions={this.state.selectedBudget.expenses}
        />
        <Dashboard
          budget={this.state.selectedBudget}
          stats={this.state.stats}
          radarChartData={this.state.stats.categoryTotal}
          recentTransactions={this.state.selectedBudget.expenses}
        />
      </section>
    );
  }
}

export default Home;
