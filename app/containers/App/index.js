/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  FileTextOutlined,
  LineChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard/LoadableDashboard';
import PostManagements from '../PostManagements/loadablePostManagement';
import SettingPage from '../Setting/loadableSetting';
import SubscriptionPage from '../Dashboard/components/subcription/LoadableSubcription';
import RevenuePage from '../Dashboard/components/revenue/LoadableRevenue';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { normalTheme } from '../../themes/normalTheme';
import LayoutPage from '../Layout';
import history from '../../utils/history';
import { APP_ROUTER } from '../../utils/constants';

export default function App() {
  const CustomRouter = ({ exact, path, component }) => {
    const Component = component;
    const menu = [
      {
        key: 1,
        icon: <LineChartOutlined />,
        label: 'Dashboard',
      },
      {
        key: 2,
        icon: <FileTextOutlined />,
        label: 'Post Management',
      },
      {
        key: 3,
        icon: <SettingOutlined />,
        label: 'Settings',
      },
    ];

    const onClickMenu = itemMenu => {
      // eslint-disable-next-line default-case
      switch (itemMenu) {
        case APP_ROUTER.dashboard.key:
          history.push(APP_ROUTER.dashboard.path);
          break;
        case APP_ROUTER.postManagement.key:
          history.push(APP_ROUTER.postManagement.path);
          break;
        case APP_ROUTER.settings.key:
          history.push(APP_ROUTER.settings.path);
          break;
      }
    };

    return (
      <Route
        exact={exact}
        path={path}
        render={() => (
          <LayoutPage
            menu={menu}
            defaultSelectedKeys={['1']}
            onClickMenu={onClickMenu}
          >
            <Component />
          </LayoutPage>
        )}
      />
    );
  };

  CustomRouter.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.any,
  };

  return (
    <ThemeProvider theme={normalTheme}>
      <>
        <Switch>
          <CustomRouter exact path="/" component={Dashboard} />
          <CustomRouter
            exact
            path={APP_ROUTER.dashboard.path}
            component={Dashboard}
          />
          <CustomRouter
            exact
            path={APP_ROUTER.postManagement.path}
            component={PostManagements}
          />
          <CustomRouter
            exact
            path={APP_ROUTER.settings.path}
            component={SettingPage}
          />
          <CustomRouter
            exact
            path={APP_ROUTER.subscription.path}
            component={SubscriptionPage}
          />
          <CustomRouter
            exact
            path={APP_ROUTER.revenue.path}
            component={RevenuePage}
          />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
