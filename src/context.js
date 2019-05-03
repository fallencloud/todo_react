import React, { Component } from 'react';

//initialize context
const Context = React.createContext();

//create provider
//provides context
export class Provider extends Component {
  //create state
  state = {
    tasks: [
      { id: 1, desc: 'Go To Dentist' },
      { id: 2, desc: 'Do Gardening' },
      { id: 3, desc: 'Renew Library Account' }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
