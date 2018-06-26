import React from 'react';
import BackIcon from 'react-icons/lib/md/arrow-back';
import MoreIcon from 'react-icons/lib/md/more-vert';
import './WriteHeader.scss';

type Props = {
  onChangeTitle(e: any): void,
  title: string,
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
      <div className="actions">
        <div className="button temp-save">
          Temp
        </div>
        <div className="button submit">
          Submit
        </div>
        <div className="more util flex-center">
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

export default WriteHeader;
