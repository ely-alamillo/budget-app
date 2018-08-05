import React, { Component } from 'react';
const intialState = {
  category: '',
  expenseName: '',
  expenseTotal: '',
  description: ''
};

class AddExpenseForm extends Component {
  state = {};

  componentWillMount() {
    this.setState(intialState);
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  submitExpense = () => {
    const expense = { ...this.state };
    this.props.addExpense(expense);
    this.setState(intialState);
    this.props.closeModal(this.props.modalId);
  };

  render() {
    return (
      <section className="section has-background-white">
        <div>
          <form>
            <div className="field">
              <label className="label">Expense Name</label>
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Starbucks"
                  name="expenseName"
                  value={this.state.expenseName}
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Expense Total</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="currency"
                  placeholder="8.00"
                  name="expenseTotal"
                  value={this.state.expenseTotal}
                  onChange={this.handleInput}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <span className="select">
                  <select
                    value={this.state.category}
                    onChange={this.handleCategoryChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Other">Other</option>
                    <option value="Subscriptions">Subscriptions</option>
                  </select>
                </span>
                <span className="icon is-small is-left">
                  <i className="fas fa-globe" />
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Morning Cofee"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                />
              </div>
            </div>

            <div className="field is-grouped">
              <p className="control">
                <a className="button is-link" onClick={this.submitExpense}>
                  Add Expense
                </a>
              </p>
              <p className="control">
                <a
                  className="button"
                  onClick={() => this.props.closeModal(this.props.modalId)}
                >
                  Cancel
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddExpenseForm;
