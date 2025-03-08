import firebase from 'firebase/compat/app';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
      <h1>Logos</h1>
  <div class='welcome-msg'>
    <h2> Your <span class="text-info">Digital Board</span> of Ideas, <span class="text-info">Visualize</span> your path to action.</h2>
  </div>
  <button id="google-auth" class="btn btn-success">GOOGLE LOGIN</button>
  `;
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus(firebase);
};

init();
