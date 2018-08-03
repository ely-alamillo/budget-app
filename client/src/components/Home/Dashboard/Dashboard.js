import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const { budget } = this.props;
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile">
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
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="subtitle">Expenses</p>
                  <p className="title">{'0.00'}</p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="title">Categories</p>
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
