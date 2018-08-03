import React from 'react';
import { Modal } from '../../shared/Modal/Modal';
import CreateBudgetForm from '../CreatBudgetForm/CreateBudgetForm';

const ButtonToolbar = () => {
  const createBudget = '#createBudget';
  const addExpense = '#addExpense';
  const toggle = modalId => {
    document.getElementById(modalId).classList.toggle('is-active');
  };

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
          <button className="button" onClick={() => toggle(createBudget)}>
            Create Budget
          </button>
        </p>
        <p className="level-item">
          <button className="button" onClick={() => toggle(addExpense)}>
            Add Expense
          </button>
        </p>
      </div>
      <Modal for={createBudget} title={'Create Budget'}>
        <CreateBudgetForm />
      </Modal>
      <Modal for={addExpense} title={'A Expense'} />
    </div>
  );
};

export default ButtonToolbar;
