import React from 'react';
import { Modal } from '../../shared/Modal/Modal';
import CreateBudgetForm from '../CreatBudgetForm/CreateBudgetForm';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import { Transactions } from '../Transactions/Transactions';

const ButtonToolbar = props => {
  const createBudget = '#createBudget';
  const addExpense = '#addExpense';
  const showTrans = '#showTrans';

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
          <button
            className="button"
            onClick={() => toggle(createBudget)}
            disabled={props.createDisabled}
          >
            Create Budget
          </button>
        </p>
        <p className="level-item">
          <button
            className="button"
            onClick={() => toggle(addExpense)}
            disabled={props.expenseDisabled}
          >
            Add Expense
          </button>
        </p>

        <p className="level-item">
          <button
            className="button"
            onClick={() => toggle(showTrans)}
            disabled={props.showTransDisabled}
          >
            Show All transactions
          </button>
        </p>

        <p className="level-item">
          <button
            className="button"
            disabled
            onClick={() => console.log('drop tables')}
          >
            Delete Budget
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
      <Modal for={addExpense} title={'Add Expense'}>
        <AddExpenseForm
          addExpense={props.addExpense}
          closeModal={toggle}
          modalId={addExpense}
        />
      </Modal>
      <Modal for={showTrans} title={'Transactions'}>
        <Transactions
          transactions={props.transactions}
          closeModal={toggle}
          modalId={showTrans}
        />
      </Modal>
    </div>
  );
};

export default ButtonToolbar;
