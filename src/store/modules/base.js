// @flow
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SHOW_USER_MENU = 'base/SHOW_USER_MENU';
const HIDE_USER_MENU = 'base/HIDE_USER_MENU';
const SET_FULLSCREEN_LOADER = 'base/SET_FULLSCREEN_LOADER';

export type BaseActionCreators = {
  showUserMenu(): any,
  hideUserMenu(): any,
  setFullscreenLoader(visibility: boolean): any,
};

export const actionCreators: BaseActionCreators = {
  showUserMenu: createAction(SHOW_USER_MENU),
  hideUserMenu: createAction(HIDE_USER_MENU),
  setFullscreenLoader: createActions(SET_FULLSCREEN_LOADER);
};

export type Base = {
  userMenu: boolean,
  fullscreenLoader: boolean
}

const initialState = {
  userMenu: false,
  fullscreenLoader: false,
};

const reducer = handleActions({
  [SHOW_USER_MENU]: state => produce(state, (draft) => {
    draft.userMenu = true;
  }),
  [HIDE_USER_MENU]: state => produce(state, (draft) => {
    draft.userMenu = false;
  }),
  [SET_FULLSCREEN_LOADER]: (state, { payload: visibility }) => produce(state, (draft) => {
    draft.fullscreenLoader = visibility;
  })
}, initialState);

export default reducer;