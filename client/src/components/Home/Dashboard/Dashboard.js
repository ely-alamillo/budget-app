import React, { Component } from 'react';
import LineChart from '../Charts/LineChart/LineChart';
import './Dashboard.css';
import RadarChart from '../Charts/RadarChart/RadarChart';
import { Table } from '../Table/Table';
import DonutChart from '../Charts/DonutChart/DonutChart';

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
                    <span className="icon is-small is-left">
                      <i className="fas fa-dollar-sign" />
                    </span>
                    <span style={{ marginLeft: '15px' }}>
                      {budget.budgetTotal
                        ? Number(budget.budgetTotal).toLocaleString()
                        : '0.00'}
                    </span>
                  </p>
                </article>
              </div>
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="subtitle">Expenses (total)</p>
                  <p className="title">
                    <span className="icon is-small is-left">
                      <i className="fas fa-dollar-sign" />
                    </span>
                    <span style={{ marginLeft: '15px' }}>
                      {stats.expensesTotal
                        ? Number(stats.expensesTotal).toLocaleString()
                        : '0.00'}
                    </span>
                  </p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-success">
                  <p className="subtitle">Available Budget</p>
                  <p className="title">
                    <span className="icon is-small is-left">
                      <i className="fas fa-dollar-sign" />
                    </span>
                    <span style={{ marginLeft: '15px' }}>
                      {budget.budgetTotal && stats.expensesTotal
                        ? Number(
                            budget.budgetTotal - stats.expensesTotal
                          ).toLocaleString()
                        : '0.00'}
                    </span>
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
                  <DonutChart
                    expensesTotal={this.props.expensesTotal}
                    budgetTotal={this.props.budgetTotal}
                  />
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
