import React from 'react'
import Project from './Project'

export default class ContentPanel extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Supervisor</th>
            <th>Worker</th>
            <th>Tasks</th>
            </tr>
        </thead>

        <tbody>
          {this.props.items.map(
            (item) => <Project key={item.id} project={item} />
          )}
        </tbody>
      </table>
    )
  }
}
