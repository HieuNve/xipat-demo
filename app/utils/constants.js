export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const COOKIES = {
  access_token: 'access_token',
};

export const REDUX_KEY = {
  app: 'app',
  login: 'login',
};

export const APP_ROUTER = {
  dashboard: {
    path: '/dashboard',
    key: '1',
  },
  postManagement: {
    path: '/post-managements',
    key: '2',
  },
  settings: {
    path: '/settings',
    key: '3',
  },
  subscription: {
    path: '/dashboard/subscription',
    key: '4',
  },
  revenue: {
    path: '/dashboard/revenue',
    key: '5',
  },
};
