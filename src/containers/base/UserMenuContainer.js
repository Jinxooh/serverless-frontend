// @flow
import React, { Component } from 'react';
import UserMenu from 'components/base/UserMenu';
import withClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions, UserActions } from 'store/actionCreators';

type Props = {
  visible: boolean
};

class UserMenuContainer extends Component<Props> {
  onClickOutside = () => {
    BaseActions.hideUserMenu();
  }

  onClick = () => {
    BaseActions.hideUserMenu();
  }

  render() {
    const { visible } = this.props;
    const { onClickOutside, onClick } = this;
    if (!visible) return null;

    return (
      <UserMenu
        onClickOutside={onClickOutside}
        onClick={onClick}
      />
    );
  }
}

export default connect(
  ({ base }: State) => ({
    visible: base.userMenu,
  }),
  () => ({}),
)(UserMenuContainer);