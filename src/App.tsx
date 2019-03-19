import React, { Component } from 'react';
import './App.css';
import Page from './Page/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Page />
        </header>
      </div>
    );
  }
}

export default App;
