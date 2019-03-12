import React, { Component } from 'react';
import './App.css';
import JestSample from './JestSample/JestSample';
import EnzymeSample from './EnzymeSample/EnzymeSample';
import TestComponent from './EnzymeSample/Challenge/TestComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <JestSample /> */}
          {/* <EnzymeSample onSubmit={() => console.log('submitted!')} /> */}
          <TestComponent
            name={'John Doe'}
            age={'36'}
            checked={true}
          />
        </header>
      </div>
    );
  }
}

export default App;
