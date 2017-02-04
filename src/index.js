import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';

/*
  Import Routes
*/
import Routes from './components/Routes';


/*
  Import Global CSS
*/
import './global.scss';



/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }


render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);
