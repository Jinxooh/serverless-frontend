// @flow
import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import { applyPenders } from 'lib/common';

const CHECK_USER = 'user/CHECK_USER';
const SET_USER = 'user/SET_USER';
const PROCESS_USER = 'user/PROCESS_USER';
const LOGOUT = 'user/LOGOUT';


type SetUserPayload = {
  id: string,
  username: string,
  displayName: string,
  thumbnail?: ?string,
}

const checkUser = createAction(CHECK_USER, AuthAPI.check);
const setUser = createAction(SET_USER, (payload: SetUserPayload) => payload);
const processUser = createAction(PROCESS_USER);
const logout = createAction(LOGOUT, AuthAPI.logout);

type CheckUserAction = ActionType<typeof checkUser>;
type SetUserAction = ActionType<typeof setUser>;
type ProcessUserAction = ActionType<typeof processUser>;
type Logout = ActionType<typeof logout>;

export interface UserActionCreators {
  checkUser(): any,
  setUser({ id: string, username: string, displayName: string }): any,
  processUser(): any,
  logout(): any,
}

export const actionCreators: UserActionCreators = {
  checkUser, setUser, processUser, logout,
};

export type UserData = {
  id: string,
  username: string,
  displayName: string,
  thumbnail?: ?string,
}

export type User = {
  user: ?UserData,
  processed: boolean,
}

const initialState: User = {
  user: null,
  processed: false,
};

const reducer = handleActions({
  [SET_USER]: (state, action: SetUserAction) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.user = action.payload;
    });
  },
  [PROCESS_USER]: (state, action: ProcessUserAction) => {
    return produce(state, (draft) => {
      draft.processed = true;
    });
  },
}, initialState);

export default applyPenders(reducer, [
  {
    type: CHECK_USER,
    onSuccess: (state, { payload: { data } }) => {
      return produce(state, (draft) => {
        draft.user = data.user;
        draft.processed = true;
      });
    },
    onError: state => produce(state, (draft) => {
      draft.user = null;
      draft.processed = true;
    }),
  },
]);
