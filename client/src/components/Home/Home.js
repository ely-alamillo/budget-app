import React from 'react';
import axios from 'axios';
import { Component } from 'react';

import ButtonToolbar from './ButtonToolbar/ButtonToolbar';
import Dashboard from './Dashboard/Dashboard';

import './Home.css';

const baseUrl = 'http://localhost:4000/api';
const defaultState = {
  budgets: {},
  selectedBudget: {},
  stats: {},
  createDisabled: false,
  expenseDisabled: true
};

class Home extends Component {
  // state = testState;
  componentWillMount() {
    this.setState(defaultState);
  }

  componentDidMount() {
    const requests = [this.getBudgets(), this.getExpenses()];
    let createDisabled;
    Promise.all(requests)
      .then(([budgetData, expensesData]) => {
        const { budgets } = budgetData.data;
        const { expenses } = expensesData.data;
        console.log({ budgets, expenses });
        if (budgets.length === 0) {
          createDisabled = true;
          this.setState(defaultState);
        } else {
          const budget = { ...budgets[0], expenses };

          this.setState(
            {
              budgets: {
                [budgets[0].budgetName]: budget
              },
              selectedBudget: { ...budget },
              createDisabled
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
    console.log(expense);
    axios
      .post(`${baseUrl}/expenses`, expense)
      .then(x => {
        console.log('add: ', x);
      })
      .catch(e => console.log(e));

    this.setState(
      {
        budgets: {
          [budgetName]: {
            ...this.state.budgets[budgetName],
            expenses: [...expenses, expense]
          }
        },
        selectedBudget: {
          ...this.state.selectedBudget,
          expenses: [...this.state.selectedBudget.expenses, expense]
        }
      },
      () => this.calculateStats()
    );
  };

  calculateStats = () => {
    const { selectedBudget } = this.state;
    const getTotal = (acc, exp) => acc + Number(exp.expenseTotal);
    const expensesTotal = selectedBudget.expenses.reduce(getTotal, 0);
    console.log(this.state.selectedBudget.expenses);

    this.setState({ stats: { expensesTotal } }, () =>
      this.calculateSpendingByCat()
    );
  };

  calculateSpendingByCat = () => {
    const { selectedBudget } = this.state;
    const getTotal = (total, expense) => {
      const { category, expenseTotal } = expense;

      // total[category] != undefined
      //   ? (total[category] = Number(expenseTotal) + total[category])
      //   : (total[category] = Number(expenseTotal));
      total[category] =
        Number(expenseTotal) + total[category] || Number(expenseTotal);

      return total;
    };
    const categoryTotal = selectedBudget.expenses.reduce(getTotal, {});
    this.setState({ stats: { ...this.state.stats, categoryTotal } });
  };

  render() {
    return (
      <section className="section" style={{ minHeight: '90vh' }}>
        <ButtonToolbar
          createBudget={this.createBudget}
          addExpense={this.addExpense}
          createDisabled={this.state.createDisabled}
          expenseDisabled={this.state.expenseDisabled}
        />
        <Dashboard
          budget={this.state.selectedBudget}
          stats={this.state.stats}
          radarChartData={this.state.stats.categoryTotal}
        />
      </section>
    );
  }
}

export default Home;
