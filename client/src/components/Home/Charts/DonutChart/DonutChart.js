import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const defaultData = [100, 0];

const isNil = x => {
  return x === undefined || x === null;
};

const validateData = x => {
  return isNil(x) ? 0 : x;
};

class DonutChart extends Component {
  getDonutData = () => {
    const { expensesTotal, budgetTotal } = this.props;
    const budgetLeft = Number(budgetTotal) - expensesTotal;
    const data = [expensesTotal, budgetLeft];
    return data;
  };

  render() {
    let donutData = [];
    isNil(this.props.expensesTotal) || isNil(this.props.budgetTotal)
      ? (donutData = [...defaultData])
      : (donutData = this.getDonutData());

    const data = {
      labels: ['Expenses', 'Budget'],
      datasets: [
        {
          data: donutData,
          backgroundColor: ['#FF6384', '#2ECC71'],
          hoverBackgroundColor: ['#FF6384', '#2ECC71']
        }
      ]
    };

    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
}

export default DonutChart;
