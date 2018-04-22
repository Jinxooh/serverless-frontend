// @flow
import React from 'react';
import withClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';
// import UserMenuItem from 'components/base/UserMenuItem';
import './UserMenu.scss';

const UserMenu = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      UserMenu
    </div>
  );
};

export default withClickOutside(UserMenu, {
  handleClickOutside(instance) {
    return instance.props.onClickOutside;
  },
});