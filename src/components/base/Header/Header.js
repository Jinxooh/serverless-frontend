// @flow
import React, { type Node } from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';

type Props = {
  right: Node,
  userMenu: Node,
}

const Header = ({ right, userMenu }: Props) => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        <span>H</span>eo <span>H</span>ye <span>J</span>ung
      </div>
      <nav>
        <a className="active" href="/recent">Recent</a>
        <a href="/trending">Trending</a>
        <a href="/tag">Tag</a>
        <a href="/write">Write</a>
      </nav>
      <div className="right">
        {right}
        {userMenu}
      </div>
    </Responsive>
  </header>
);

export default Header;
