export default (state, action) => {
  console.log("Applying", action)
  switch(action.type) {
    case 'APPLY_FILTER':
      return Object.assign({}, state, { currentFilter: action.value })
    case 'CLEAR_FILTER':
      return Object.assign({}, state, { currentFilter: null })
    case 'SIGN_IN':
      return Object.assign({}, state, { currentUser: action.name })
    case 'SIGN_OUT':
      return Object.assign({}, state, { currentUser: null })
    default:
      return state;
  }
}
