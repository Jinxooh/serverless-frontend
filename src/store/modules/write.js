import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

const EDIT_FIELD = 'write/EDIT_FIELD';

const editField = createAction(EDIT_FIELD);

type EditField = ActionType<typeof editField>;

export interface WriteActionCreators {
  editBody(value: string): any,
  editField({ field: string, value: string }): any
}

export const actionCreators: WriteActionCreators = {
  editField,
};

export type Write = {
  body: string,
  title: string,
}

const initialState: Write = {
  body: '',
  title: '',
};

export default handleActions({

  [EDIT_FIELD]: (state, action: EditField) => {
    return produce(state, (draft) => {
      const { field, value } = action.payload;
      draft[field] = value;
    });
  },
}, initialState);
