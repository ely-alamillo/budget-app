import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Component } from 'react';

import ButtonToolbar from './ButtonToolbar/ButtonToolbar';
import Dashboard from './Dashboard/Dashboard';

import './Home.css';

class Home extends Component {
  state = { budgets: {}, selectedBudget: {} };

  createBudget = budget => {
    console.log('set create budget');
    const name = budget.budgetName;
    this.setState({ budgets: { [name]: budget }, selectedBudget: budget });
  };

  addNewExpense = expense => {
    console.log('add expense');
  };
  render() {
    return (
      <section className="section" style={{ height: '90vh' }}>
        <ButtonToolbar
          createBudget={this.createBudget}
          addNewExpense={this.addNewExpense}
        />
        <Dashboard budget={this.state.selectedBudget} />
      </section>
    );
  }
}

export default Home;
