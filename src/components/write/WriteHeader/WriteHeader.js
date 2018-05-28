import React from 'react';
import BackIcon from 'react-icons/lib/md/arrow-back';
import './WriteHeader.scss';

const WriteHeader = () => {
  return (
    <div className="WriteHeader">
      <BackIcon className="back-icon" />
      <div className="title-area">
        <input placeholder="input title" />
      </div>
      <div className="submit-button">Submit</div>
    </div>
  );
};

export default WriteHeader;
