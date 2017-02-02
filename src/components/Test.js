import React from 'react';
const { Component } = React;
import { Link } from 'react-router';

import './test.scss';

class Test extends Component {
  render() {
    return(
      <div styleName="meh" className="moo">
        <h1><Link to="/">Back home you say. Very well.</Link></h1>
        <p styleName="element">My ghastly styles are parsed through scss-loader and postcss-loader before being locally scoped via babel-plugin-react-css-modules and loaded into the document head. The JSX uses the "styleName" attribute and imports test.scss. In order to allow sharing of default styles whilst also using the higher-performance anoymous naming from babel-plugin-react-css-modules, test.scss accesses and parses @import styles into local css modules from ~/src/style/var.scss. Any html or style edits down the chain will all hot reload. The production build is configured to load into an external file via extract-text-webpack-plugin but I have not yet considered spill from global styles.</p>
        <p className="sans-serif">I load global styles from ~/src/global.scss because I use "className" attribute. extract-text-webpack-plugin loads them straight into styles.css.  Subject to specificity, global styles will usually be overwritten by the css modules since they're in the head. Use global styles sparingly. Global styles don't hot reload. </p>
      </div>
    );
  }
}

export default Test;
