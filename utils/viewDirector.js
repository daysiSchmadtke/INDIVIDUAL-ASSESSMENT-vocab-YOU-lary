import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import client from './client';

// Initialize Firebase
const app = initializeApp(client);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const ViewDirectorBasedOnUserAuthStatus = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
