export default (state, action) => {
  console.log("Applying", action)
  switch(action.type) {
    case 'APPLY_FILTER':
      return Object.assign({}, state, { currentFilter: action.value })
    case 'CLEAR_FILTER':
      return Object.assign({}, state, { currentFilter: null })
    default:
      return state;
  }
}
