// @flow
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SHOW_USER_MENU = 'base/SHOW_USER_MENU';
const HIDE_USER_MENU = 'base/HIDE_USER_MENU';

export type BaseActionCreators = {
  showUserMenu(): any,
  hideUserMenu(): any,
};

export const actionCreators: BaseActionCreators = {
  showUserMenu: createAction(SHOW_USER_MENU),
  hideUserMenu: createAction(HIDE_USER_MENU),
};

export type Base = {
  userMenu: boolean
}

const initialState = {
  userMenu: false,
};

const reducer = handleActions({
  [SHOW_USER_MENU]: state => produce(state, (draft) => {
    draft.userMenu = true;
  }),
  [HIDE_USER_MENU]: state => produce(state, (draft) => {
    draft.userMenu = false;
  }),
}, initialState);

export default reducer;