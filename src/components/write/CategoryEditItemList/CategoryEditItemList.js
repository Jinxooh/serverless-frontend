// @flow
import React from 'react';
import RemoveIcon from 'react-icons/lib/io/trash-b';
import EditIcon from 'react-icons/lib/md/edit';
import CreateIcon from 'react-icons/lib/md/add-circle';
import type { Categories } from 'store/modules/write';
import './CategoryEditItemList.scss';
import CategoryEditItem from '../CategoryEditItem';

type Props = {
  categories: ?Categories;
  onCreate(): void;
  onToggleEditCategory(id: string): void;
  onChange({ id: string, name: string }): void;
  onHideCategory(id: string): void;
}

const CategoryEditItemList = ({
  categories, onCreate, onToggleEditCategory, onChange, onHideCategory,
}: Props) => {
  if (!categories) return null;
  const categoryList = categories.filter(c => !c.hide).map(
    category => (
      <CategoryEditItem
        key={category.id}
        name={category.name}
        edit={category.edit}
        temp={category.temp}
        onToggleEditCategory={() => onToggleEditCategory(category.id)}
        onChange={(e: SyntheticInputEvent<HTMLInputElement>) => onChange({
          id: category.id,
          name: e.target.value,
        })}
        onHide={() => onHideCategory(category.id)}
      />
    ),
  );
  return (
    <div className="CategoryEditItemList">
      {categoryList}
      <div className="create-category util flex-center" onClick={onCreate}>
        <CreateIcon />
        <div>Create New Category</div>
      </div>
    </div>
  );
};


export default CategoryEditItemList;