import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ToDo />
      </div>
    );
  }
}

export default App;
