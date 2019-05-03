import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: ''
  };
  render() {
    const { task } = this.state;
    return (
      <div class='row input-area'>
        <div class='col-md-1' />
        <div class='form-group col-md-9'>
          <h2>Add Task</h2>
          <input
            type='text'
            placeholder='New Task'
            class='form-control'
            value={task}
          />
        </div>
        <div class='form-group col-md-1'>
          <button class='btn btn-primary'>Add</button>
        </div>
        <div class='col-md-1' />
      </div>
    );
  }
}

export default AddTask;
