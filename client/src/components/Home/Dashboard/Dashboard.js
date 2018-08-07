import React, { Component } from 'react';
import LineChart from '../Charts/LineChart/LineChart';
import './Dashboard.css';
import RadarChart from '../Charts/RadarChart/RadarChart';
import { Table } from '../Table/Table';

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
                    <Table recentTransactions={this.props.recentTransactions} />
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
