import React from 'react'
import { connect } from 'react-redux'
import filterActions from '../actions/filterActions'

class FilterPanel extends React.Component {
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
          action: this.props.applyFilter.bind(this, 'type', filter)
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
}

const mapStateToProps = (store) => {
  return {
    currentFilter: store.currentFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    applyFilter: (filteredAttribute, filteredValue) => {
      dispatch(filterActions.applyFilter(filteredAttribute, filteredValue))
    },
    clearFilter: (filteredAttribute, filteredValue) => {
      dispatch(filterActions.clearFilter(filteredAttribute, filteredValue))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
