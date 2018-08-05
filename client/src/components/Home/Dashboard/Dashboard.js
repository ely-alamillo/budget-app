import React, { Component } from 'react';
import LineChart from '../Charts/LineChart/LineChart';
import './Dashboard.css';
import RadarChart from '../Charts/RadarChart/RadarChart';

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
                  <div className="table-custom">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Age</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Jill</td>
                          <td>Smith</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                  <p className="title">Budget and Expenses</p>
                  <LineChart />
                </article>
              </div>
            </div>

            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-primary">
                  <p className="title">Spending by Category</p>
                  <RadarChart data={this.props.radarChartData} />
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
