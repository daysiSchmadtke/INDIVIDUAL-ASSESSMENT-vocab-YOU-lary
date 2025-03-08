import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import firebase from 'firebase/app';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'firebase/auth';

gsap.registerPlugin(TextPlugin);

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Logos</h1>
    <div class='welcome-msg'>
      <h2> Your <span class="text-info">Digital Board</span> of Ideas, <span class="text-info">Visualize</span> your path to action.</h2>
    </div>
    <button id="google-login" class="btn btn-primary">Login with Google</button>
  `;
  ViewDirectorBasedOnUserAuthStatus();

  // Google login event listener
  document.querySelector('#google-login').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

init();

gsap.to('.welcome-msg', {
  delay: 5,
  duration: 7,
  text: { value: 'Unlock your creativity: Build amazing Projects, develop new ideas!' },
  color: '#5E2BFF',
  fontSize: '1.5rem',
  ease: 'power1.inOut'
});
