import React from 'react';
import Responsive from 'components/common/Responsive';

import './HomeTemplate.scss';

const HomeTemplate = ({ form }) => {
  const title = 'Hye jung\'s Daily Diary';
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h1>{title}</h1>
            <p>She records moments each day</p>
            <p>Recording habits will make you happier than usual</p>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            {form}
          </div>
          <div className="register-button">
            Now Start
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default HomeTemplate;
