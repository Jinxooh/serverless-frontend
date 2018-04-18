// @flow
import React from 'react';
import Responsive from 'components/common/Responsive';
import defaultThumbnail from 'static/images/default_thumbnail.png';
import './Header.scss';

const Header = () => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        <span>H</span>eo <span>H</span>ye <span>J</span>ung
      </div>
      <nav>
        <a className="active" href="/">Recent</a>
        <a href="/">Trending</a>
        <a href="/">Tag</a>
        <a href="/">Write</a>
      </nav>
      <div className="right">
        <img src={defaultThumbnail} alt="adf" />
      </div>
    </Responsive>
  </header>
);

export default Header;
