import React, { Component } from 'react';
import ToDo from './components/ToDo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>The App Component</h1>
        <ToDo />
      </div>
    );
  }
}

export default App;
