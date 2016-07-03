export default {
  sign_in: (name) => {
    return {
      type: 'SIGN_IN',
      name: name
    }
  },
  sign_out: () => {
    return {
      type: 'SIGN_OUT'
    }
  }
}
