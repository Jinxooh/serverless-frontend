// @flow
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import SettingsIcon from 'react-icons/lib/md/settings';
import cx from 'classnames';

import './SubmitBox.scss';

type Props = {
  isEditing: boolean,
  selectCategory: any,
  inputTags: any,
  visible: boolean,
  onClose(): void,
  onSubmit(): void,
  onEditCategoryClick(): void,
};

type State = {
  animating: boolean,
};

class SubmitBox extends Component<Props, State> {
  animateTimeout: any;

  static defaultProps = {
    isEditing: false,
  }

  state = {
    animating: false,
  }

  handleClickOutside = () => {
    const { onClose, visible } = this.props;
    if (!visible) return;
    onClose();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.animate();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animateTimeout);
  }

  animate = () => {
    clearTimeout(this.animateTimeout);
    this.setState({
      animating: true,
    });
    this.animateTimeout = setTimeout(() => {
      this.setState({
        animating: false,
      });
    }, 150);
  }

  render() {
    const {
      isEditing, selectCategory, inputTags,
      visible, onSubmit, onEditCategoryClick,
    } = this.props;
    const { animating } = this.state;

    if (!visible && !animating) return null;

    return (
      <div className={cx('SubmitBox', visible ? 'appear' : 'disappear')}>
        <div className="title">
          {isEditing ? 'Modify' : 'Write New Post'}
        </div>
        <div className="sections">
          <section>
            <div className="section-title category" onClick={onEditCategoryClick}>
              Select Category
              <div className="edit util flex-center">
                <SettingsIcon />
                <div>Modify</div>
              </div>
            </div>
            {selectCategory}
          </section>
          <section>
            <div className="section-title">
              Setting Tag
            </div>
            {inputTags}
          </section>
        </div>
        <div className="footer">
          <div className="open-options">
            <span>Additional Setting</span>
          </div>
          <div className="submit-button util flex-center" onClick={onSubmit}>Create</div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(SubmitBox);