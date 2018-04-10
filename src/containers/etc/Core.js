// @flow
import React, { Component } from 'react';
import { UserActions } from 'store/actionCreators';
import storage, { keys } from 'lib/storage';

type Props = {

};

class Core extends Component<Props> {
  checkUser = async () => {
    const storeUser = storage.get(keys.user);
    if (!storeUser) {
      UserActions.processUser();
      return;
    }
    UserActions.setUser(storeUser);
    try {
      await UserActions.checkUser();
    } catch (e) {
      storage.remove(keys.user);
    }
  }

  initialize = async () => {
    UserActions.checkUser();
  }
  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div />
    );
  }
}

export default Core;