import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDo extends Component {
  render() {
    const { task } = this.props;
    return <li>{task}</li>;
  }
}

ToDo.propTypes = {
  task: PropTypes.string.isRequired
};

export default ToDo;
