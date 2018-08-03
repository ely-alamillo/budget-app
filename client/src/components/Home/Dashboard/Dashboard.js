import React, { Component } from 'react';

class Dasboard extends Component {
  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-success">
                  <p className="title">Budget</p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="title">Expenses</p>
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

export default Dasboard;
