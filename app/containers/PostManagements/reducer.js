import produce from 'immer';
import {
  GET_INFORMATION_USER,
  GET_INFORMATION_USER_SUCCESS,
  GET_LIST_USERS,
  GET_LIST_USERS_SUCCESS,
  RESET_REDUX,
} from './constants';

export const initialState = {
  isLoading: false,
  listUser: [],
  totalRecord: 0,
  informationUser: [],
  isLoadingModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const postManagementReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        draft.informationUser = [];
        draft.listUser = [];
        draft.totalRecord = 0;
        break;
      case GET_LIST_USERS:
        draft.isLoading = true;
        break;
      case GET_LIST_USERS_SUCCESS:
        draft.isLoading = false;
        draft.listUser = action.data.data;
        draft.totalRecord = action.data.data.length;
        break;
      case GET_INFORMATION_USER:
        draft.isLoadingModal = true;
        break;
      case GET_INFORMATION_USER_SUCCESS:
        draft.isLoadingModal = false;
        draft.informationUser = action.data.data;
        break;
    }
  });

export default postManagementReducer;
