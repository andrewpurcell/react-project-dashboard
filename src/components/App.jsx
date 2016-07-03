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
    this.setState({ filter: 'painting' });
  };

  applyTypeFilter() {
    return this.props.items.filter(
      (item) => item.type !== this.state.filter
    );
  }

  clearFilter() {
    this.setState({filter: null})
  }

  render() {
    return (
      <div>
        <Header title="The Header" />
        <FilterPanel
          applyTypeFilter={this.setTypeFilter.bind(this)}
          clearFilter={this.clearFilter.bind(this)}
          currentFilter={this.state.filter} />
        <ContentPanel items={this.applyTypeFilter()} />

      </div>
    );
  }
}
