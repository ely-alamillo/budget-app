import React from 'react';

const ButtonToolbar = () => {
  return (
    <div className="level">
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
    </div>
  );
};

export default ButtonToolbar;
