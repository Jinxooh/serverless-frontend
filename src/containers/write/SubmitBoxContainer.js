// @flow
import React, { Component } from 'react';
import SubmitBox from 'components/write/SubmitBox';
import SelectCategory from 'components/write/SelectCategory';
import InputTags from 'components/write/InputTags';

class SubmitBoxContainer extends Component {
  render() {
    return (
      <SubmitBox
        selectCategory={<SelectCategory />}
        inputTags={<InputTags tags={['hihi', 'gogogoe']} />}
      />
    );
  }
}


export default SubmitBoxContainer;