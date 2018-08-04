import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const { budget, stats } = this.props;
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile is-vertical">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-success">
                  <p className="subtitle">
                    {budget.budgetName
                      ? `${budget.budgetName} (total)`
                      : 'Budget Total'}
                  </p>
                  <p className="title">
                    {budget.budgetTotal ? budget.budgetTotal : '0.00'}
                  </p>
                </article>
              </div>
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="subtitle">Expenses</p>
                  <p className="title">
                    {stats.expensesTotal ? stats.expensesTotal : '0.00'}
                  </p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-success">
                  <p className="subtitle">Available Budget</p>
                  <p className="title">
                    {budget.budgetTotal && stats.expensesTotal
                      ? budget.budgetTotal - stats.expensesTotal
                      : '0.00'}
                  </p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="subtitle">Transactions</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-primary">
                  <p className="title">graphs here</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
