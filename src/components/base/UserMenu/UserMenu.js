// @flow
import React from 'react';
import withClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';
import UserMenuItem from 'components/base/UserMenuItem';
import './UserMenu.scss';

type Props = {
  username: string,
  onClick(): void,
  onLogout(): Promise<*>,
}

const UserMenu = ({ onClick, onLogout, username }: Props) => {
  return (
    <div className="user-menu-wrapper">
      <div className="user-menu-positioner">
        <div className="user-menu" onClick={onClick}>
          <div className="me">
            <div className="username">
              @{username}
            </div>
          </div>
          <div className="menu-items">
            <UserMenuItem>
              New Post
            </UserMenuItem>
            <UserMenuItem>
              Temperary Post
            </UserMenuItem>
            <div className="separator" />
            <UserMenuItem>
              Settings
            </UserMenuItem>
            <UserMenuItem onClick={onLogout}>
              Logout
            </UserMenuItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withClickOutside(UserMenu, {
  handleClickOutside(instance) {
    return instance.props.onClickOutside;
  },
});