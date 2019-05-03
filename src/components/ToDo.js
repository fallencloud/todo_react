import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class ToDo extends Component {
  state = {
    isComplete: false
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  render() {
    const { id, desc } = this.props.task;
    const { isComplete } = this.state;
    return (
      <Consumer>
        {value => {
          return (
            <li className='list-group-item checkbox'>
              <div className='row'>
                <div className='col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox'>
                  <label>
                    <input
                      type='checkbox'
                      value=''
                      onClick={() => {
                        this.setState({ isComplete: !this.state.isComplete });
                      }}
                    />
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
                  <i
                    onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                    className='delete-icon glyphicon glyphicon-trash'
                  />
                </div>
              </div>
            </li>
          );
        }}
      </Consumer>
    );
  }
}

ToDo.propTypes = {
  task: PropTypes.object.isRequired
};

export default ToDo;
