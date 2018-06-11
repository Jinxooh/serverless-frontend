import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

const EDIT_BODY = 'write/EDIT_BODY';
const EDIT_FIELD = 'write/EDIT_FIELD';

const editBody = createAction(EDIT_BODY);
const editField = createAction(EDIT_FIELD);

type EditBody = ActionType<typeof editBody>;
type EditField = ActionType<typeof editField>;

export interface WriteActionCreators {
  editBody(value: string): any,
  editField({ field: string, value: string }): any
}

export const actionCreators: WriteActionCreators = {
  editBody, editField,
};

export type Write = {
  body: string,
}

const initialState: Write = {
  body: '',
};

export default handleActions({
  [EDIT_BODY]: (state, action: EditBody) => {
    return produce(state, (draft) => {
      console.log(action.payload);
      draft.body = action.payload;
    });
  },
}, initialState);
