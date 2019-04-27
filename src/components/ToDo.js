import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDo extends Component {
  render() {
    const { task } = this.props;
    return (
      <li className='list-group-item checkbox'>
        <div className='row'>
          <div className='col-1 checkbox'>
            <label>
              <input id='toggleTaskStatus' type='checkbox' />
            </label>
          </div>
          <div className='col-10 task-text '>{task}</div>
          <div className='col-1 delete-icon-area'>
            <a className='' href='/'>
              <i
                id='deleteTask'
                data-id='0'
                className='delete-icon glyphicon glyphicon-trash'
              />
            </a>
          </div>
        </div>
      </li>
    );
  }
}

ToDo.propTypes = {
  task: PropTypes.string.isRequired
};

export default ToDo;
