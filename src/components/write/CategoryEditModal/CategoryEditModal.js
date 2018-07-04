import React, { Component, type Node } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import ModalWrapper from 'components/common/ModalWrapper';
import './CategoryEditModal.scss';

type Props = {
  children: Node,
};

class CategoryEditModal extends Component<Props> {
  content: any = null;

  componentDidMount = () => {
    const ps = new PerfectScrollbar(this.content);
  }

  render() {
    const { children } = this.props;
    return (
      <ModalWrapper className="CategoryEditModal">
        <h2>Category Modify</h2>
        <div className="content" ref={(ref) => { this.content = ref; }}>
          {children}
        </div>
        <div className="foot">
          <div className="button cancel">Cancel</div>
          <div className="button save">Save</div>
        </div>
      </ModalWrapper>
    );
  }
}

export default CategoryEditModal;