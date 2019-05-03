import React, { Component } from 'react';
import Nav from './components/Nav';
import Tasks from './components/Tasks';

//allows for context
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Nav branding='To Do App' />
          <div className='container'>
            <div className='content-area row' />
            <div className='col-8'>
              <ul>
                <Tasks />
              </ul>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
