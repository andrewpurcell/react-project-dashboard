import React from 'react'

export default class FilterPanel extends React.Component {
  render() {
    const { currentFilter } = this.props;
    var buttonText, buttonAction, filterStatus;

    if (currentFilter != null) {
      filterStatus = `Active filter: ${currentFilter}`;
      buttonText = "Clear active filter";
      buttonAction = this.props.clearFilter;
    } else {
      buttonText = "Show only painting projects"
      buttonAction = this.applyFilter.bind(this, 'painting');
    }


    return (
      <div className='filter-panel'>
        {filterStatus}
        <button
          onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
    );
  }

  applyFilter(type) {
    this.props.applyTypeFilter(type);
  }
}
