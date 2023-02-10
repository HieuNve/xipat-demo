import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectPostManagement = state =>
  state[REDUX_KEY.postManagement] || initialState;

export function selectLoading() {
  return createSelector(
    selectPostManagement,
    state => state.isLoading,
  );
}

export function selectUsers() {
  return createSelector(
    selectPostManagement,
    state => state.listUser,
  );
}

export function selectTotalRecord() {
  return createSelector(
    selectPostManagement,
    state => state.totalRecord,
  );
}

export function selectInformationUser() {
  return createSelector(
    selectPostManagement,
    state => (state.informationUser.length > 0 ? state.informationUser[0] : []),
  );
}

export function selectLoadingModal() {
  return createSelector(
    selectPostManagement,
    state => state.isLoadingModal,
  );
}
