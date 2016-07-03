import React from 'react'
import Header from './Header'
import FilterPanel from './FilterPanel'
import FilteredContent from './FilteredContent'
import ContentPanel from './ContentPanel'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null }
  }

  setCurrentUser(newUser) {
    this.setState({currentUser: newUser});
  }

  unsetCurrentUser() {
    this.setCurrentUser(null)
  }

  filters() {
    const types = this.props.items.map(
        (item) => item.type
    );

    return types.filter( (type, index, list) => list.indexOf(type) == index);
  }

  render() {
    return (
      <div>
        <Header />

        <FilterPanel
          currentFilter={this.props.currentFilter}
          allFilters={this.filters()}/>

        <FilteredContent currentFilter={this.props.currentFilter} />

      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.projects,
    currentFilter: store.currentFilter
  }
}
export default connect(mapStateToProps)(App)
