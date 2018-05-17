// @flow
import React from 'react';
import Spinner from 'components/common/Spinner';
import './FullscreenLoader.scss';

type Props = {
  visible: boolean
}

const FullscreenLoader = ({ visible }: Props) => {
  return (
    <div className="FullscreenLoader">
      <Spinner />
    </div>
  );
};

export default FullscreenLoader;