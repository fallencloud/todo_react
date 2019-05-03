import React, { Component } from 'react';
import ToDo from './ToDo';
//import consumer
import { Consumer } from '../context';

class Tasks extends Component {
  deleteTask = id => {
    const { tasks } = this.state;

    const newTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { tasks } = value;

          return (
            <>
              {tasks.map(task => (
                <ToDo
                  key={task.id}
                  task={task}
                  deleteTaskHandler={this.deleteTask.bind(this, task.id)}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Tasks;
