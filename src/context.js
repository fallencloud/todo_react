import React, { Component } from 'react';

//initialize context
const Context = React.createContext();

//create reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

//create provider
//provides context
export class Provider extends Component {
  //create state
  state = {
    tasks: [
      { id: 1, desc: 'Go To Dentist' },
      { id: 2, desc: 'Do Gardening' },
      { id: 3, desc: 'Renew Library Account' }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
