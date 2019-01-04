import React, { Component } from 'react';
import Helmet from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Movies App" />
      </div>
    );
  }
}

export default App;
