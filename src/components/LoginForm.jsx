import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    const { onSetName } = this.props;

    return (
      <div>
        <form onSubmit={this.submitChange.bind(this)}>
          <input
            onKeyUp={this.handleChange.bind(this, 'name')}
            type="text" name="name" placeholder="Your name"/>
        </form>
      </div>
    )
  }

  submitChange(event) {
    event.preventDefault();

    this.props.onSetName(this.state.name);
  }

  handleChange(attribute, event) {
    this.setState({ [attribute]: event.target.value})
  }
}
