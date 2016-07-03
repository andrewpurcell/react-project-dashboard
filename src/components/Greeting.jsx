import React from 'react'

export default class Greeting extends React.Component {
  render() {
    const { name, onLogout } = this.props;

    return (
      <div>
        <span>Hi {name}.</span>
        <button onClick={onLogout}>Not you?</button>
      </div>
    );
  }
}
