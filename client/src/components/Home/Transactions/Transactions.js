import React, { Component } from 'react';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';
const headers = ['Name', 'Total', 'Description', 'Category'];

export class Transactions extends Component {
  state = { data: [], headers: [] };

  componentWillReceiveProps(nextProps) {
    const data = [...this.props.transactions];

    this.setState({ data, headers });
  }

  close = () => {
    const data = [...this.props.transactions];
    this.props.closeModal(this.props.modalId);
    this.setState({ data, headers });
  };

  getByTotal = () => {
    const trans = [...this.props.transactions];
    const data = trans.sort((a, b) => {
      return b.expenseTotal - a.expenseTotal;
    });
    this.setState({ data, headers });
  };

  getByCategory = () => {
    const trans = [...this.props.transactions];
    const data = trans.sort((a, b) => {
      const aCat = a.category.toUpperCase();
      const bCat = b.category.toUpperCase();
      if (aCat < bCat) return -1;
      if (aCat > bCat) return 1;
      return 0;
    });
    this.setState({ data, headers });
  };

  getByRecent = () => {
    const data = [...this.props.transactions].reverse();
    this.setState({ data, headers });
  };

  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-12">Filter</p>
            </div>
          </div>

          <div className="level-right">
            <p className="level-item">
              <button className="button" onClick={this.getByTotal}>
                By Expense Total
              </button>
            </p>
            <p className="level-item">
              <button className="button" onClick={this.getByCategory}>
                By Category
              </button>
            </p>
            <p className="level-item">
              <button className="button" onClick={this.getByRecent}>
                By Recent
              </button>
            </p>
          </div>
        </div>
        <div>
          <TransactionsTable
            data={this.state.data}
            headers={this.state.headers}
          />
        </div>

        <div className="field is-grouped" style={{ marginTop: '20px' }}>
          <p className="control">
            <a className="button" onClick={this.close}>
              Close
            </a>
          </p>
        </div>
      </div>
    );
  }
}
