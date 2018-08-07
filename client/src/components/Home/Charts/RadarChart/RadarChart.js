import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

const isNil = x => {
  return x === undefined || x === null;
};

const validateData = x => {
  return isNil(x) ? 0 : x;
};

const defaultData = [0, 0, 0, 0, 0];

class RadarChart extends Component {
  getRadarData = () => {
    const { Food, Rent, Clothing, Other, Subscriptions } = this.props.data;
    const data = [
      validateData(Food),
      validateData(Rent),
      validateData(Clothing),
      validateData(Other),
      validateData(Subscriptions)
    ];
    return data;
  };

  render() {
    let radarData = [];
    isNil(this.props.data)
      ? (radarData = [...defaultData])
      : (radarData = this.getRadarData());

    const data = {
      labels: ['Food', 'Rent', 'Clothing', 'Other', 'Subscriptions'],
      datasets: [
        {
          label: 'Total Spending',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: radarData
        }
      ]
    };

    return (
      <div style={{ padding: '10px' }}>
        <Radar data={data} />
      </div>
    );
  }
}

export default RadarChart;
