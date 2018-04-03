import React, { Component } from 'react';
import type { Node } from 'react';
import BackgroundColor from 'components/common/BackgroundColor';
import Responsive from 'components/common/Responsive';

import './RegisterTemplate.scss';

type Props = {
  form: Node,
};

class RegisterTemplate extends Component<Props> {
  render() {
    const { form } = this.props;
    return (
      <div className="register-template">
        <BackgroundColor color="#7048e8" />
        <Responsive className="mock-header">
          <div className="brand">
            <span>H</span>eo <span>H</span>ye <span>J</span>ung
          </div>
          <div className="light">
            <span>/</span>Register
          </div>
        </Responsive>
        <section className="rest">
          <div className="register-card">
            { form }
          </div>
        </section>
      </div>
    );
  }
}

export default RegisterTemplate;