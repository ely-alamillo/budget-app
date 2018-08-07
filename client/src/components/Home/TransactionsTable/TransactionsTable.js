import React from 'react';

export const TransactionsTable = props => {
  const renderHeaders = () => {
    if (props.headers === undefined) {
      return null;
    } else {
      return (
        <tr>
          {props.headers.map((header, i) => {
            return <th key={i}>{header}</th>;
          })}
        </tr>
      );
    }
  };

  const renderData = () => {
    if (props.data === undefined) {
      return null;
    } else {
      return (
        <tbody>
          {props.data.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.expenseName}</td>
                <td>{x.expenseTotal}</td>
                <td>{x.description}</td>
                <td>{x.category}</td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  };

  return (
    <table className="table is-fullwidth">
      <thead>{renderHeaders()}</thead>
      {renderData()}
    </table>
  );
};
