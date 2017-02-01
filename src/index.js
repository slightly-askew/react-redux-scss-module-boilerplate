import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import { AppContainer } from 'react-hot-loader';
import './global.scss';


ReactDOM.render(
  <AppContainer>
    <Test />
  </AppContainer>,
  document.getElementById('root'));
