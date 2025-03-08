import 'firebase/compat/auth';
import 'bootstrap'; // import bootstrap elements and js
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import '../styles/main.scss';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
