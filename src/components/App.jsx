import React from 'react'
import Header from './Header'
import FilterPanel from './FilterPanel'
import ContentPanel from './ContentPanel'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: null}
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
        <Header title="The Header" />
        <FilterPanel
          applyFilter={this.setTypeFilter.bind(this)}
          clearFilter={this.clearFilter.bind(this)}
          currentFilter={this.state.filter}
          allFilters={this.filters()}/>
        <ContentPanel items={this.applyTypeFilter()} />

      </div>
    );
  }
}
