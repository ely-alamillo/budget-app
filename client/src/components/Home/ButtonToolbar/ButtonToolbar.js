import React from 'react';
import { Modal } from '../../shared/Modal/Modal';
import CreateBudgetForm from '../CreatBudgetForm/CreateBudgetForm';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';

const ButtonToolbar = props => {
  const createBudget = '#createBudget';
  const addExpense = '#addExpense';

  const toggle = modalId => {
    document.getElementById(modalId).classList.toggle('is-active');
  };

  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <p className="title is-12">Dashboard</p>
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
        <CreateBudgetForm
          createBudget={props.createBudget}
          closeModal={toggle}
          modalId={createBudget}
        />
      </Modal>
      <Modal for={addExpense} title={'A Expense'}>
        <AddExpenseForm
          addExpense={props.addExpense}
          closeModal={toggle}
          modalId={addExpense}
        />
      </Modal>
    </div>
  );
};

export default ButtonToolbar;
