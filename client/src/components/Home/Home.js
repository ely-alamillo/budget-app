import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <section className="section" style={{ height: '90vh' }}>
        {/* <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-primary">
                  <p className="title">Buttons go here</p>
                </article>
              </div>
            </div>
          </div>
        </div> */}

        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-12">
                <strong>123</strong> posts
              </p>
            </div>
          </div>

          <div className="level-right">
            <p className="level-item">
              <button className="button">Create Budget</button>
            </p>
            <p className="level-item">
              <button className="button">Add Expense</button>
            </p>
          </div>
        </nav>

        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-success">
                  <p className="title">Left</p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="title">Middle</p>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent ">
                <article className="tile is-child notification is-warning">
                  <p className="title">Right</p>
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
      </section>
    );
  }
}

export default Home;
