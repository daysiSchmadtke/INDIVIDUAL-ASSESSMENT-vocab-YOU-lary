import React from 'react';
import { signIn } from '../utils/auth';

const LoginButton = () => {
  return (
    <button id="google-login" className="btn btn-info" onClick={signIn}>
      Login
    </button>
  );
};

export default LoginButton;
