import React, { Component } from 'react';
import ToDo from './ToDo';

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, desc: 'Go To Dentist' },
      { id: 2, desc: 'Do Gardening' },
      { id: 3, desc: 'Renew Library Account' }
    ]
  };

  deleteTask = id => {
    const { tasks } = this.state;

    const newTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks
    });
  };
  render() {
    //destructuring the contacts
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
        {tasks.map(task => (
          <ToDo
            key={task.id}
            task={task}
            deleteTaskHandler={this.deleteTask.bind(this, task.id)}
          />
        ))}
      </div>
    );
  }
}

export default Tasks;
