// @flow
import React, { Component } from 'react';
import uniqBy from 'lodash/uniqBy';
import RemoveIcon from 'react-icons/lib/md/remove-circle';
import './InputTags.scss';

type Props = {
  tags: Array<string>
};

type State = {
  input: string
};

const Tag = ({ name }) => (
  <div className="tag">
    <div className="text">{name}</div>
    <div className="remove">
      <RemoveIcon />
    </div>
  </div>
);

class InputTags extends Component<Props, State> {
  static defaultProps = {
    tags: ['tag1 ', 'tag2', 'tag3'],
  };

  state = {
    input: '',
  }

  onChange = (e: any) => {
    this.setState({
      input: e.target.value,
    });
  }

  onKeyPress = (e: any) => {
    if (['Enter', ','].indexOf(e.key) !== -1) {
      this.onButtonClick();
      e.preventDefault();
    }
  }

  onButtonClick = () => {
    this.setState({
      input: '',
    });
  }

  renderTags() {
    const { tags } = this.props;
    return tags.map(tag => (<Tag key={tag} name={tag} />));
  }
  render() {
    const { onChange, onButtonClick, onKeyPress } = this;
    const { input } = this.state;
    return (
      <div className="InputTags">
        <div className="input-button">
          <input placeholder="Input Tag" value={input} onChange={onChange} onKeyPress={onKeyPress} />
          <div className="button util flex-center" onClick={onButtonClick}>Register</div>
        </div>
        <div className="tags">
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

export default InputTags;