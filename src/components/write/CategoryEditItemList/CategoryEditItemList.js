// @flow
import React from 'react';
import RemoveIcon from 'react-icons/lib/io/trash-b';
import EditIcon from 'react-icons/lib/md/edit';
import CreateIcon from 'react-icons/lib/md/add-circle';
import CategoryEditItem from '../CategoryEditItem';

import './CategoryEditItemList.scss';

type Props = { }

const CategoryEditItemList = (props: Props) => (
  <div className="CategoryEditItemList">
    <CategoryEditItem edit />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />
    <CategoryEditItem />

    <div className="create-category">
      <CreateIcon />
      <div>Create category</div>
    </div>
  </div>
);

export default CategoryEditItemList;
