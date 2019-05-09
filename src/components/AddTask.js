import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';

class AddTask extends Component {
  state = {
    task: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { task } = this.state;

    //get form value
    const newTask = {
      id: uuid(),
      desc: task
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });

    //clear form
    this.setState({
      task: ''
    });
  };

  render() {
    const { task } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='row input-area'>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className='row'>
                  <div className='form-group col-md-9 col-md-offset-2'>
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
                </div>
                <div className='row'>
                  <div className='form-group col-md-1 col-md-offset-2'>
                    <button className='btn btn-primary'>Add</button>
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTask;
