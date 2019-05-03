import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { task } = this.state;
    return (
      <div className='row input-area'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group col-md-9'>
            <h2>Add Task</h2>
            <input
              type='text'
              name='task'
              placeholder='New Task'
              className='form-control'
              value={task}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group col-md-1'>
            <button className='btn btn-primary'>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
