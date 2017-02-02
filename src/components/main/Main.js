import React from 'react';
const { Component } = React;
import { Link } from 'react-router';

class Main extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <h1>
          <Link to="main">Click to visit Main - some styles live there</Link>
        </h1>
        {/* We use cloneElement here so we can auto pass down props */}
        {/* { React.cloneElement(this.props.children, this.props) } */}

      </div>
    );
  }

};

export default Main;
