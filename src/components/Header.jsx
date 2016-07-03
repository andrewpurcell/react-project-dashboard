import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import LoginForm from './LoginForm'
import userActions from '../actions/userActions'

class Header extends React.Component {
  render() {
    const { currentUser, onLogout } = this.props;

    if (currentUser) {
      return (<Greeting name={currentUser} onLogout={onLogout} />);
    } else {
      return (<LoginForm />)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(userActions.sign_out())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
