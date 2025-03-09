import React from 'react';
import { signOut } from '../utils/auth';

const LogoutButton = () => {
  return (
    <button id="google-logout" className="btn btn-info" onClick={signOut}>
      Logout
    </button>
  );
};

export default LogoutButton;
