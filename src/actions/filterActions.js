export default {
  applyFilter: (filterAttribute, filterAttributeValue) => {
    return {
      type: 'APPLY_FILTER',
      attribute: filterAttribute,
      value: filterAttributeValue

    }
  },
  clearFilter: (filterAttribute, filterAttributeValue) => {
    return {
      type: 'CLEAR_FILTER',
      attribute: filterAttribute,
      value: filterAttributeValue
    }
  }
}
