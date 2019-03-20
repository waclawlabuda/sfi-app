import React, { Component } from 'react';
import './App.css';
import Page from './Page/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Page />
          {/* <JestSample /> */}
          {/* <EnzymeSample onSubmit={() => console.log('submitted!')} /> */}	
          {/* <TestComponent	
            name={'John Doe'}	
            age={'36'}	
            checked={true}	
          /> */}
        </header>
      </div>
    );
  }
}

export default App;
