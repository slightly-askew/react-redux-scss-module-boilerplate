import React from 'react';
const { Component } = React;
import { Link } from 'react-router';

import './test.scss';

class Test extends Component {
  render() {
    return(
      <div styleName="meh" className="moo">
        <h1><Link to="/">Back home you say. Very well.</Link></h1>
        <p styleName="element">My ghastly styles are locally scoped and load into the document head via "styleName" attribute from an anonymously named css module created from test.scss, which also accesses and parses @import styles from ~/src/style/var.scss. Any html or style edits will hot reload. The production build is configured to load into an external file via extract-text-webpack-plugin but I have not yet considered spill from global styles.</p>
        <p className="sans-serif">I load global styles from ~/src/global.scss because I use "className" attribute. extract-text-webpack-plugin loads them straight into styles.css.  Subject to specificity, global styles will usually be overwritten by the css modules since they're in the head. Use global styles sparingly. Global styles don't hot reload. </p>
      </div>
    );
  }
}

export default Test;
