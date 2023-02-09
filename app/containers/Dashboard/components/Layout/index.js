import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../style';
import history from '../../../../utils/history';
import { APP_ROUTER } from '../../../../utils/constants';
import { ButtonTabs } from './style';

const LayoutDashboard = ({ children }) => {
  const Tabs = [
    {
      name: 'Subscription',
      key: APP_ROUTER.subscription.key,
      path: APP_ROUTER.subscription.path,
      isActive: true,
    },
    {
      name: 'Revenue',
      key: APP_ROUTER.revenue.key,
      path: APP_ROUTER.revenue.path,
      isActive: false,
    },
  ];

  return (
    <div>
      <Title>Dashboard</Title>
      <div>
        {Tabs.map(item => (
          <ButtonTabs
            onClick={() => {
              history.push(item.path);
            }}
          >
            {item.name}
          </ButtonTabs>
        ))}
      </div>
      <>{children}</>
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.any,
};

export default LayoutDashboard;
