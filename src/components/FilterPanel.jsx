import React from 'react'

export default class FilterPanel extends React.Component {
  render() {
    const { currentFilter, allFilters } = this.props;

    const filterButtons = allFilters.map((filter) => {
      if (currentFilter === filter) {
        return {
          text: `Clear active filter ${filter}`,
          action: this.props.clearFilter
        };
      } else {
        return {
          text: `Show only ${filter} projects`,
          action: this.applyFilter.bind(this, filter)
        };
      }
    });

    return (
      <div className='filter-panel'>
        {filterButtons.map(
          (buttonAttributes) =>
            <button onClick={buttonAttributes.action}>
              {buttonAttributes.text}
            </button>
          )
        }
      </div>
    );
  }

  applyFilter(type) {
    this.props.applyFilter(type);
  }
}
