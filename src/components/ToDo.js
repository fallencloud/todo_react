import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDo extends Component {
  render() {
    const { desc, isComplete } = this.props.task;
    return (
      <li className='list-group-item checkbox'>
        <div className='row'>
          <div className='col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox'>
            <label>
              <input type='checkbox' value='' />
            </label>
          </div>
          <div
            className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
              isComplete ? 'complete' : null
            }`}
          >
            {desc}
          </div>
          <div className='col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area'>
            <a className='' href='/'>
              <i className='delete-icon glyphicon glyphicon-trash' />
            </a>
          </div>
        </div>
      </li>
    );
  }
}

ToDo.propTypes = {
  task: PropTypes.object.isRequired
};

export default ToDo;
