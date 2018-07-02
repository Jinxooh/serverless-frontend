import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import * as MeAPI from 'lib/api/me';
import { applyPenders } from 'lib/common';

const EDIT_FIELD = 'write/EDIT_FIELD';
const OPEN_SUBMIT_BOX = 'write/OPEN_SUBMIT_BOX';
const CLOSE_SUBMIT_BOX = 'write/CLOSE_SUBMIT_BOX';
const LIST_CATEGORIES = 'write/LIST_CATEGORIES';
const TOGGLE_CATEGORY = 'write/TOGGLE_CATEGORY';

type EditFieldAction = ActionType<typeof editField>;
type ToggleCategoryAction = ActionType<typeof toggleCategory>;

export interface WriteActionCreators {
  editField({ field: string, value: string }): any,
  openSubmitBox(): any,
  closeSubmitBox(): any,
  listCategories(): any,
  toggleCategory(id: string): any,
}

export const actionCreators: WriteActionCreators = {
  editField: createAction(EDIT_FIELD),
  openSubmitBox: createAction(OPEN_SUBMIT_BOX),
  closeSubmitBox: createAction(CLOSE_SUBMIT_BOX),
  listCategories: createAction(LIST_CATEGORIES, MeAPI.listCategories),
  toggleCategory: createAction(TOGGLE_CATEGORY, (id: string) => id),
};

export type Category = {
  id: string,
  order: number,
  parent: string,
  private: boolean,
  name: string,
  urlSlug: string,
  active: boolean,
};
export type Categories = Category[];

export type SubmitBox = {
  open: boolean,
}

export type Write = {
  body: string,
  title: string,
  submitBox: SubmitBox,
  categories: ?Categories,
}

const initialState: Write = {
  body: '',
  title: '',
  submitBox: {
    open: false,
    categories: null,
  },
};

const reducer = handleActions({
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
  [TOGGLE_CATEGORY]: (state, { payload: id }: ToggleCategoryAction) => {
    if (!state.submitBox.categories) return state;
    const index = state.categories.findIndex(category => category.id === id);
    return produce(state, (draft) => {
      if (!draft.submitBox.categories) return;
      draft.submitBox.categories[index].active = !draft.submitBox.categories[index].active;
    });
  },
}, initialState);

export default applyPenders(reducer, [
  {
    type: LIST_CATEGORIES,
    onSuccess: (state: Write, { payload: { data } }) => {
      const categories: Categories = data.map(category => ({
        id: category.id,
        order: category.order,
        parent: category.parent,
        private: category.private,
        name: category.name,
        urlSlug: category.url_slug,
      }));

      return produce(state, (draft) => {
        draft.submitBox.categories = categories;
      });
    },
  },
]);