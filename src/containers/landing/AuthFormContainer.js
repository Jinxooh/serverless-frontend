import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from 'store/actionCreators';
import type { State } from 'store';
import AuthForm from 'components/landing/AuthForm';
import { pressedEnter } from 'lib/common';

type Props = {
  email: string,
  sentEmail: boolean,
  sending: boolean,
  isUser: boolean,
}

class AuthFormContainer extends Component<Props> {
  onEnterKeyPress = pressedEnter(() => {
    this.onSendVerification();
  })

  onChange = (e) => {
    const { value } = e.target;
    AuthActions.setEmailInput(value);
  }

  onSendVerification = async (): Promise<*> => {
    const { email } = this.props;
    try {
      await AuthActions.sendAuthEmail(email);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { onChange, onSendVerification, onEnterKeyPress } = this;
    const { email, sending, sentEmail, isUser } = this.props;

    return (
      <AuthForm
        isUser={isUser}
        email={email}
        sending={sending}
        sentEmail={sentEmail}
        onChange={onChange}
        onSendVerification={onSendVerification}
        onEnterKeyPress={onEnterKeyPress}
      />
    );
  }
}

export default connect(
  ({ auth, pender }: State) => ({
    email: auth.email,
    sentEmail: auth.sentEmail,
    isUser: auth.isUser,
    sending: pender.pending['auth/SEND_AUTH_EMAIL'],
  }),
  () => ({}),
)(AuthFormContainer);