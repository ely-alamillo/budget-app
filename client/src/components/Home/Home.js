import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Component } from 'react';

import ButtonToolbar from './ButtonToolbar/ButtonToolbar';
import Dashboard from './Dashboard/Dashboard';

import './Home.css';

class Home extends Component {
  state = { budgets: {}, selectedBudget: {}, stats: {} };

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
    console.log('calculatin');
    // const { selectedBudget } = this.state;

    console.log(this.state.selectedBudget.expenses);

    // this.setState({ stats: { expensesTotal } });
  };

  render() {
    return (
      <section className="section" style={{ height: '90vh' }}>
        <ButtonToolbar
          createBudget={this.createBudget}
          addExpense={this.addExpense}
        />
        <Dashboard budget={this.state.selectedBudget} />
      </section>
    );
  }
}

export default Home;
