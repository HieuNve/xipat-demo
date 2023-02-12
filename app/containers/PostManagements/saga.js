import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosGet } from 'utils/request';
import * as actions from './actions';
import * as constants from './constants';

export function* getListUser(action) {
  yield put(actions.requestBegin());
  const path = `/posts${action.body}`;

  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getListUserSuccess(res));
  } catch (err) {
    yield put(actions.requestFail(err));
  }
}

export function* getInformationUser(action) {
  yield put(actions.requestBegin());
  const path = `/posts/${action.body}`;

  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getInformationUserSuccess(res));
  } catch (err) {
    yield put(actions.requestFail(err));
  }
}

export default function* watchFetchProcessor() {
  yield takeLatest(constants.GET_LIST_USERS, getListUser);
  yield takeLatest(constants.GET_INFORMATION_USER, getInformationUser);
}
