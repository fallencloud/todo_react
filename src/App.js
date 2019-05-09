import React, { Component } from 'react';
import Nav from './components/Nav';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

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
            <div className='content-area' />
            <div className='row'>
              <div className='col-8'>
                <AddTask />
              </div>
              <div className='row'>
                <ul className='col-md-9 col-md-offset-2'>
                  <Tasks />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
