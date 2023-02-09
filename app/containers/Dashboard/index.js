import React, { useState } from 'react';
import { Tabs } from 'antd';
import { KEY_TAB_REVENUE, KEY_TAB_SUBSCRIPTION } from './constants';
import Subscription from './components/subcription';
import Revenue from './components/revenue';
import { Title } from './style';

const Dashboard = () => {
  const [tabs, setTabs] = useState(KEY_TAB_SUBSCRIPTION);
  const items = [
    {
      key: KEY_TAB_SUBSCRIPTION,
      label: 'Subscription',
    },
    {
      key: KEY_TAB_REVENUE,
      label: 'Revenue',
    },
  ];
  const onChange = key => {
    setTabs(key);
  };

  const ListTab = {
    [KEY_TAB_SUBSCRIPTION]: <Subscription />,
    [KEY_TAB_REVENUE]: <Revenue />,
  };
  return (
    <div>
      <Title>Dashboard</Title>
      <Tabs
        defaultActiveKey={KEY_TAB_SUBSCRIPTION}
        items={items}
        onChange={onChange}
      />
      <>{ListTab[tabs]}</>
    </div>
  );
};

export default Dashboard;
