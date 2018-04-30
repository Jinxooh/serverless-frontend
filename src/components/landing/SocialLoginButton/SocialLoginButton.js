// @flow
import React from 'react';
import cx from 'classnames';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import GithubIcon from 'react-icons/lib/fa/github';
import GoogleIcon from 'react-icons/lib/fa/google';
import './SocialLoginButton.scss';

type Props = {
  type: 'facebook' | 'google' | 'github',
  onSocialLoigin(provider: string): void
};

const providers = {
  github: {
    icon: GithubIcon,
  },
  facebook: {
    icon: FacebookIcon,
  },
  google: {
    icon: GoogleIcon,
  },
};

const SocialLoginButton = (props: Props) => {
  const { type, onSocialLoigin } = props;
  const { icon: Icon } = providers[type];
  return (
    <div className={cx('social-login-button', type)} onClick={() => onSocialLoigin(type)} >
      <div className="icon">
        <Icon />
      </div>
      <div className="text">
        {type} <span className="login">Start</span>
      </div>
    </div>
  );
};

SocialLoginButton.defaultProps = {
  type: 'github',
};

export default SocialLoginButton;