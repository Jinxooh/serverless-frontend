import React from 'react';
import BackIcon from 'react-icons/lib/md/arrow-back';
import './WriteHeader.scss';

type Props = {
  onChangeTitle(e: any): void,
  value: string
}

const WriteHeader = ({
  onChangeTitle,
  title,
}) => {
  return (
    <div className="WriteHeader">
      <BackIcon className="back-icon" />
      <div className="title-area">
        <input
          placeholder="input title"
          autoFocus
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className="submit-button">Submit</div>
    </div>
  );
};

export default WriteHeader;
