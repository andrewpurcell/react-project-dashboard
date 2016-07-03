import React from 'react'
import Task from './Task'

export default class Project extends React.Component {
  render() {
    const { name, supervisor, worker, flags, tasks } = this.props.project;
    return (
      <tr className="project">
        <td>{name}</td>
        <td>{supervisor}</td>
        <td>{worker}</td>
        <td>
          <ul>
            {tasks.map(
              (task) => <Task key={task.id} item={task} />
            )}
          </ul>
        </td>
      </tr>
    )
  }
}
