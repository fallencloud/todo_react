import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header branding='To Do App' />
        <ul>
          <ToDo task='Go To Dentist' />
          <ToDo task='Do Gardening' />
          <ToDo task='Renew Library Account' />
        </ul>
      </div>
    );
  }
}

export default App;
