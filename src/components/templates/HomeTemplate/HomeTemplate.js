import React from 'react';
import Responsive from 'components/common/Responsive';

import './HomeTemplate.scss';

const HomeTemplate = () => {
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h1>HHJ Daily Diary</h1>
            <p>She saves momonets of everyday</p>
            <p>Recording makes you happier than normal</p>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            제 이름은요 어쩌고인데
          </div>
          <div className="register-button">
            지금 시작하기
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default HomeTemplate;
