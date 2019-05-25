// Import React and ReactDOM
import React from 'react';
import { render } from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Framework7 styles
import 'framework7/css/framework7.bundle.min.css';
import { colorSecondary } from './styles';

// Import main App component
import { App } from './components/App';

// Init Framework7-React plugin
Framework7.use(Framework7React);

document.documentElement.style.setProperty('--f7-font-family', 'Montserrat');
document.documentElement.style.setProperty('--f7-text-color', colorSecondary);

// Mount React App
render(<App />, document.getElementById('app'));
