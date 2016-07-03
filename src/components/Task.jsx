import React from 'react';

export default class Task extends React.Component {
  render() {
    const { name, assignee } = this.props.item;

    return (
      <li>{name} <em>{assignee}</em></li>
    );
  }
}
