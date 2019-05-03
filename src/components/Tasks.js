import React, { Component } from 'react';
import ToDo from './ToDo';
//import consumer
import { Consumer } from '../context';

class Tasks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tasks } = value;

          return (
            <>
              {tasks.map(task => (
                <ToDo key={task.id} task={task} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Tasks;
