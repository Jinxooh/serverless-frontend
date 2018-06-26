// @flow
import React, { Component } from 'react';
import './SubmitBox.scss';

type Props = {
  isEditing: boolean,
  SelectCategory: any,
  inputTags: any,
}

class SubmitBox extends Component<Props> {
  static defaultProps = {
    isEditing: false,
  }
  render() {
    const { isEditing, SelectCategory, inputTags } = this.props;
    return (
      <div className="SubmitBox">
        <div className="title">
          {isEditing ? 'Modifiy' : 'Write New Post'}
        </div>
        <div className="sections">
          <section>
            <div className="section-title">
              Select Category
            </div>
            {SelectCategory}
          </section>
          <section>
            <div className="section-title">
              Set Tag
            </div>
            {inputTags}
          </section>
        </div>

      </div>
    );
  }
}

export default SubmitBox;