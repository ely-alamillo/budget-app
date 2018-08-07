import React, { Component } from 'react';
const intialState = {
  category: '',
  budgetName: '',
  budgetTotal: '',
  description: '',
  expenses: []
};

class CreateBudgetForm extends Component {
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

  submitBudget = () => {
    const budget = { ...this.state };
    this.props.createBudget(budget);
    this.setState(intialState);
    this.props.closeModal(this.props.modalId);
  };

  render() {
    return (
      <section className="section has-background-white">
        <div>
          <form>
            <div className="field">
              <label className="label">Budget Name</label>
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Monthly Budget"
                  name="budgetName"
                  value={this.state.budgetName}
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Budget Total</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="currency"
                  placeholder="100.00"
                  name="budgetTotal"
                  value={this.state.budgetTotal}
                  onChange={this.handleInput}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Budget for the month"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                />
              </div>
            </div>

            <div className="field is-grouped">
              <p className="control">
                <a className="button is-link" onClick={this.submitBudget}>
                  Create
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

export default CreateBudgetForm;
