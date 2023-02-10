import {
  GET_INFORMATION_USER,
  GET_INFORMATION_USER_SUCCESS,
  GET_LIST_USERS,
  GET_LIST_USERS_SUCCESS,
  REQUEST_BEGIN,
  REQUEST_FAIL,
  RESET_REDUX,
} from './constants';

export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function requestFail(errorMessage) {
  return {
    type: REQUEST_FAIL,
    errorMessage,
  };
}

export function getListUser(body) {
  return {
    type: GET_LIST_USERS,
    body,
  };
}

export function getListUserSuccess(data) {
  return {
    type: GET_LIST_USERS_SUCCESS,
    data,
  };
}

export function getInformationUser(body) {
  return {
    type: GET_INFORMATION_USER,
    body,
  };
}

export function getInformationUserSuccess(data) {
  return {
    type: GET_INFORMATION_USER_SUCCESS,
    data,
  };
}
