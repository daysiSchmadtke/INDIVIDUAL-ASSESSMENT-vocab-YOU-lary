// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Logos</h1>
    <h2> Your Digital Board of Ideas, Visualize your path to action.</h2>
    <button class="btn btn-success" id="login">Login</button><br />
    <hr />`;
  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'));
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
