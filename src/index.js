import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Test from './components/Test';
import Main from './components/main/Main';

import './global.scss';

/* Import our data store */
import store, { history } from './store';

/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }

/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/

render(
  <AppContainer>
    <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App} />
        <IndexRoute component={Main} />
        <Route path="main" component={Test} />
        {/* add your paths in here; each component which is rendered within App at each url -- <Route path="/view/:postId" component={Single}></Route> */}
      {/*  Don't forget you can nest your routes like this:
            <Route component="{wrapper}">
              <Route path="page1" component={component1} />
              <Route path="page2" component={component2} />
            </Route>
                        --that's why there are self closing and twin tags. So you can next components within other components.
         */}
    </Router>
  </Provider>
  </AppContainer>,
  document.getElementById('root'));
