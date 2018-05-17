// @flow
import React from 'react';
import LabelInput from 'components/register/LabelInput';
import ArrowIcon from 'react-icons/lib/md/arrow-forward';

import './RegisterForm.scss';

type Props = {
  onChange(e: SyntheticInputEvent<HTMLInputElement>): void,
  onRegister(): Promise<*>,
  displayName: string,
  email: string,
  username: string,
  shortBio: string,
  emailEditable: boolean,
};

const RegisterForm = ({
  onChange, onRegister,
  displayName, email, username, shortBio, emailEditable,
}: Props) => {
  return (
    <div className="register-form">
      <div className="form-head">
        <h2>User Information</h2>
      </div>
      <div className="form-contents">
        <LabelInput value={displayName} name="displayName" required label="Name" placeholder="Input Your Name" onChange={onChange} />
        <LabelInput type="email" value={email} name="email" required label="Email" placeholder="Input Your Email" onChange={onChange} disabled={!emailEditable} />
        <LabelInput value={username} name="username" required label="ID" placeholder="Input Your ID" onChange={onChange} />
        <LabelInput value={shortBio} name="shortBio" label="Short Bio" placeholder="Input Your Short Bio" onChange={onChange} />
        <div className="agreement">
          Next 버튼을 누르면 <span>서비스 이용약관</span>과 <span>개인정보취급방침</span>에 동의하는 것을 인정합니다.
        </div>
        <div className="button-wrapper">
          <div className="icon-button" onClick={onRegister}>
            <span>Next</span>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
