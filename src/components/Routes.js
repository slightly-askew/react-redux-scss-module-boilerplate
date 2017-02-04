import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'

/* Import our data store */
import store, { history } from '../store';

/* Import our page components */

import App from './App';
import Test from './Test';


const Routes = () => {

  return(
  <Provider store={store}>
  { /* Tell the Router to use our enhanced history */ }
  <Router history={history}>
    <Route path="/" component={App} />
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
)
};

export default Routes;
