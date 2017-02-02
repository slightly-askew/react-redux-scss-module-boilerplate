import React from 'react';
const { Component } = React;
import { Link } from 'react-router';

import './test.scss';

class Test extends Component {
  render() {
    return(
      <div styleName="meh" className="moo">
        <h1><Link to="/">Super heading you say</Link></h1>
        <p styleName="element">Here is a paragraph with a little hot reloading..If it still worky worky</p>
      </div>
    );
  }
}

export default Test;
