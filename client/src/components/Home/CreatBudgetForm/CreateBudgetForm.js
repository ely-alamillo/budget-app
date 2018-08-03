import React, { Component } from 'react';
const intialState = {
  category: '',
  budgetName: '',
  budgetTotal: '',
  category: '',
  description: ''
};

class CreateBudgetForm extends Component {
  componentDidMount() {
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
                  onChange={this.handleInput}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>

            {/* <div className="field">
              <p className="control has-icons-left">
                <span className="select">
                  <select
                    value={this.category}
                    defaultValue=""
                    onChange={this.handleCategoryChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Misc">Misc.</option>
                    <option value="Subscriptions">Subscriptions</option>
                  </select>
                </span>
                <span className="icon is-small is-left">
                  <i className="fas fa-globe" />
                </span>
              </p>
            </div> */}

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Budget for the month"
                  name="description"
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CreateBudgetForm;
