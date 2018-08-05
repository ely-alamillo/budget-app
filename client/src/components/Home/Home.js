import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Component } from 'react';

import ButtonToolbar from './ButtonToolbar/ButtonToolbar';
import Dashboard from './Dashboard/Dashboard';

import './Home.css';
import { totalmem } from 'os';

const testState = {
  budgets: {
    one: {
      budgetName: 'one',
      budgetTotal: '10000',
      category: '',
      description: 'Monthly Budget',
      expenses: [
        {
          category: 'Other',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Other',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Rent',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Food',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Food',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Clothing',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        },
        {
          category: 'Food',
          description: 'coffee',
          expenseTotal: '100',
          expenseName: 'Starbucks'
        }
      ]
    }
  },
  selectedBudget: {
    budgetName: 'one',
    budgetTotal: '10000',
    category: '',
    description: 'Monthly Budget',
    expenses: [
      {
        category: 'Other',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Other',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Rent',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Food',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Food',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Clothing',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      },
      {
        category: 'Food',
        description: 'coffee',
        expenseTotal: '100',
        expenseName: 'Starbucks'
      }
    ]
  },
  stats: { expensesTotal: 700 }
};
class Home extends Component {
  // state = { budgets: {}, selectedBudget: {}, stats: {} };
  state = testState;

  createBudget = budget => {
    console.log('set create budget');
    const name = budget.budgetName;
    this.setState({ budgets: { [name]: budget }, selectedBudget: budget });
  };

  addExpense = expense => {
    const { budgetName } = this.state.selectedBudget;
    const { expenses } = this.state.budgets[budgetName];

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
