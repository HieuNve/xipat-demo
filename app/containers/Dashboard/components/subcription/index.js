import React from 'react';
import ReactEcharts from 'echarts-for-react';
import LayoutDashboard from '../Layout';

const Subscription = () => {
  const option = {
    title: {
      text: 'Average High & Low Temperature',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['High', 'Low'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Low',
        type: 'line',
        stack: 'Total',
        data: [12, 11, 14, 18, 17, 13, 13],
        markPoint: {
          data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }],
        },
      },
      {
        name: 'High',
        type: 'line',
        stack: 'Total',
        data: [28, 29, 33, 36, 32, 32, 33],
        markPoint: {
          data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }],
        },
      },
    ],
  };
  return (
    <LayoutDashboard>
      <ReactEcharts option={option} />
    </LayoutDashboard>
  );
};

Subscription.propTypes = {};

export default Subscription;
