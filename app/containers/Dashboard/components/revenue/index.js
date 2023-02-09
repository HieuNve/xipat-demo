import React from 'react';
import ReactEcharts from 'echarts-for-react';
import LayoutDashboard from '../Layout';

const Revenue = () => {
  const options = {
    title: {
      text: 'Simple Column Chart with Index Labels',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
        'Item 13',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [70, 55, 50, 65, 70, 60, 39, 80, 56, 100, 20, 120, 100],
        type: 'bar',
        markPoint: {
          data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }],
        },
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <LayoutDashboard>
      <ReactEcharts option={options} />
    </LayoutDashboard>
  );
};

Revenue.propTypes = {};

export default Revenue;
