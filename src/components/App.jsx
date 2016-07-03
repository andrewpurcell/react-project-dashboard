import React from 'react'
import Header from './Header'
import FilterPanel from './FilterPanel'
import FilteredContent from './FilteredContent'
import ContentPanel from './ContentPanel'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: null, currentUser: null }
  }

  setCurrentUser(newUser) {
    this.setState({currentUser: newUser});
  }

  unsetCurrentUser() {
    this.setCurrentUser(null)
  }

  setTypeFilter(type) {
    console.log("Applied", type);
    this.setState({ filter: type });
  };

  applyTypeFilter() {
    const { filter } = this.state;

    if (filter == null) {
      return this.props.items;
    }

    return this.props.items.filter(
      (item) => item.type === this.state.filter
    );
  }

  clearFilter() {
    this.setState({filter: null})
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
        <Header
          setCurrentUser={this.setCurrentUser.bind(this)}
          unsetCurrentUser={this.unsetCurrentUser.bind(this)}
          currentUser={this.state.currentUser} />

        <FilterPanel
          applyFilter={this.setTypeFilter.bind(this)}
          clearFilter={this.clearFilter.bind(this)}
          currentFilter={this.state.filter}
          allFilters={this.filters()}/>

        <FilteredContent currentFilter={this.state.filter} />

      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.projects
  }
}
export default connect(mapStateToProps)(App)
