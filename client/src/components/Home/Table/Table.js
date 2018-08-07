import React from 'react';

export const Table = props => {
  const transactions = props.recentTransactions;
  let transactionsForTable = [];
  transactions.length < 6
    ? (transactionsForTable = [...transactions])
    : (transactionsForTable = transactions.slice(
        Math.max(transactions.length - 5, 0)
      ));

  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {transactionsForTable.map((x, i) => {
          return (
            <tr key={i}>
              <td>{x.expenseName}</td>
              <td>{x.expenseTotal}</td>
              <td>{x.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
