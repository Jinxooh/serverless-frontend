// @flow
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import cx from 'classnames';

import './SubmitBox.scss';

type Props = {
  isEditing: boolean,
  SelectCategory: any,
  inputTags: any,
  visible: boolean,
  onClose(): void,
}

type State = {
  animating: boolean,
}

class SubmitBox extends Component<Props, State> {
  animatingTimeout: any;

  static defaultProps = {
    isEditing: false,
  }

  state = {
    animating: false,
  }

  handleClickOutside = () => {
    const { onClose } = this.props;
    onClose();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.animate();
    }
  }

  animate = () => {
    clearTimeout(this.animatingTimeout);
    this.setState({
      animating: true,
    });
    this.animatingTimeout = setTimeout(() => {
      this.setState({
        animating: false,
      });
    }, 150);
  }
  render() {
    const { isEditing, SelectCategory, inputTags, visible } = this.props;
    const { animating } = this.state;

    if (!visible && !animating) return null;

    return (
      <div className={cx('SubmitBox', visible ? 'appear' : 'disappear')}>
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
        <div className="footer">
          <div className="open-options">
            <span>Addtional setting</span>
          </div>
          <div className="submit-button util flex-center">Create</div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(SubmitBox);