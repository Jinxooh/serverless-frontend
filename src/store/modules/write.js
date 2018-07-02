import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

const EDIT_FIELD = 'write/EDIT_FIELD';
const OPEN_SUBMIT_BOX = 'write/OPEN_SUBMIT_BOX';
const CLOSE_SUBMIT_BOX = 'write/CLOSE_SUBMIT_BOX';

const editField = createAction(EDIT_FIELD);
const openSubmitBox = createAction(OPEN_SUBMIT_BOX);
const closeSubmitBox = createAction(CLOSE_SUBMIT_BOX);

type EditField = ActionType<typeof editField>;

export interface WriteActionCreators {
  editField({ field: string, value: string }): any,
  openSubmitBox(): any,
  closeSubmitBox(): any,
}

export const actionCreators: WriteActionCreators = {
  editField,
  openSubmitBox,
  closeSubmitBox,
};

export type SubmitBox = {
  open: boolean,
}

export type Write = {
  body: string,
  title: string,
  submitBox: SubmitBox,
}

const initialState: Write = {
  body: '',
  title: '',
  submitBox: {
    open: false,
  },
};

export default handleActions({

  [EDIT_FIELD]: (state, action: EditField) => {
    return produce(state, (draft) => {
      const { field, value } = action.payload;
      draft[field] = value;
    });
  },
  [OPEN_SUBMIT_BOX]: state =>
    produce(state, (draft) => {
      draft.submitBox.open = true;
    }),
  [CLOSE_SUBMIT_BOX]: state =>
    produce(state, (draft) => {
      draft.submitBox.open = false;
    }),
}, initialState);
