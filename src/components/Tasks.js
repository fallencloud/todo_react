import React, { Component } from 'react';
import ToDo from './ToDo';

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, desc: 'Go To Dentist', isComplete: true },
      { id: 2, desc: 'Do Gardening', isComplete: false },
      { id: 1, desc: 'Renew Library Account', isComplete: false }
    ]
  };
  render() {
    //destructuring the contacts
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
        {tasks.map(task => (
          <ToDo key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

export default Tasks;
