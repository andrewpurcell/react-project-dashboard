import React from 'react'
import { connect } from 'react-redux'
import ContentPanel from './ContentPanel'

const applyFilters = (projects, filter) => {
  if (!filter) {
    return projects;
  }

  return projects.filter(project => project.type === filter);
}

const mapStateToProps = (store, ownProps) => {
  return {
    items: applyFilters(store.projects, ownProps.currentFilter)
  }
}

class FilteredContent extends React.Component {
  render() {
    return <ContentPanel items={this.props.items} {...this.props} />;
  }
}

export default connect(mapStateToProps)(FilteredContent)
