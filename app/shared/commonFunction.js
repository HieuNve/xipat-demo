import Cookie from 'js-cookie';
import { COOKIES } from '../utils/constants';
import history from '../utils/history';

// Hàm format thời gian
export const formatDateTime = time => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  const data = `${format(valueTime.getDate())}/${format(
    valueTime.getMonth() + 1,
  )}/${format(valueTime.getFullYear())}`;
  return data;
};

// Hàm format thời gian
export const formatFullDateTime = (time, type) => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  if (type === 'DD/MM/YYYY HH:MM') {
    return `${format(valueTime.getDate())}/${format(
      valueTime.getMonth() + 1,
    )}/${format(valueTime.getFullYear())} ${format(
      valueTime.getHours(),
    )}:${format(valueTime.getMinutes())}`;
  }
  return `${format(valueTime.getDate())}/${format(
    valueTime.getMonth() + 1,
  )}/${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}:${valueTime.getSeconds()}`;
};
/* Ham thuc hien logout */
export const logOut = () => {
  Cookie.remove(COOKIES.accessToken);
  Cookie.remove(COOKIES.userGuid);
  Cookie.remove(COOKIES.username);
  Cookie.remove(COOKIES.email);
  Cookie.remove(COOKIES.refreshToken);
  history.push('/');
};

// eslint-disable-next-line consistent-return
export const covertUrl = url => {
  if (url) {
    let urlImage =
      process.env.NODE_ENV === 'production'
        ? window.SystemConfig.URL
        : process.env.URL;
    url.split('\\').forEach(values => {
      urlImage = `${urlImage}/${values}`;
    });
    return urlImage;
  }
};

export const createNameFileExport = () => {
  // format <YYMMDD>_<HHMMSS>_RandomNumber(6)
  const today = new Date();
  const date = `${today
    .getFullYear()
    .toString()
    .slice(2, 4)}${
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}`;
  const hour = `${
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
  }${
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  }${today.getSeconds()}`;
  const number = Math.floor(Math.random() * 999999);
  return `${date}_${hour}_${number}`;
};

export const formatDate = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

/* Ham detect mobile */
export const detectMob = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem));
};
