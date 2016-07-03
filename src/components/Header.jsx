import React from 'react'
import Greeting from './Greeting'
import LoginForm from './LoginForm'

export default class Header extends React.Component {
  render() {
    const { currentUser, setCurrentUser, unsetCurrentUser } = this.props;

    if (currentUser) {
      return (<Greeting name={currentUser} onLogout={this.logout.bind(this)} />);
    } else {
      return (<LoginForm onSetName={setCurrentUser} />)
    }
  }

  logout() {
    this.props.unsetCurrentUser();
  }
}
