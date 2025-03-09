import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Logos</h1>
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default App;
