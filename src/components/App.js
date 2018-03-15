import React, { Component } from 'react';
import Header from './base/Header';
import PageTemplates from './templates/pageTemplates';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Header />
        <PageTemplates />
      </div>
    );
  }
}

export default App;
