import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { task } = this.props;
    return <li>{task}</li>;
  }
}

export default ToDo;
