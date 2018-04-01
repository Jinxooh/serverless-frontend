// @flow
import React from 'react';
import SocialLoginButton from 'components/home/SocialLoginButton';
import CheckIcon from 'react-icons/lib/md/check';
import Spinner from 'components/common/Spinner';

import './AuthForm.scss';

type Props = {
  onChange(e: Event): void,
  onEnterKeyPress(e: KeyboardEvent): void,
  onSendVerification(): Promise<*>,
  email: string,
  sentEmail: boolean,
  sending: boolean,
}
const AuthForm = ({
  onChange,
  email,
  sentEmail,
  sending,
  onEnterKeyPress,
  onSendVerification,
}: Props) => {
  return (
    <div className="auth-form">
      {
        sentEmail ? (
          <div className="sent-email">
            <CheckIcon />
            <div className="text">
              We have emailed you a secure link.<br />
              Please click on it to processed.
            </div>
          </div>
        ) : (
          <div className="input-with-button">
            <input
              placeholder="Input your E-mail"
              value={email}
              disabled={sending}
              onChange={onChange}
              onKeyPress={onEnterKeyPress}
            />
            <div className="button" onClick={onSendVerification} >
              {sending ? <Spinner size="3rem" /> : 'Start'}
            </div>
          </div>
        )
      }
      <div className="separator">
        <div className="or">OR</div>
      </div>
      <div className="social-buttons">
        <SocialLoginButton type="github" />
        <SocialLoginButton type="google" />
        <SocialLoginButton type="facebook" />
      </div>
    </div>
  );
};

export default AuthForm;