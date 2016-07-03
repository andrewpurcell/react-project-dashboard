import React from 'react'
import { connect } from 'react-redux'
import userActions from '../actions/userActions'

class LoginForm extends React.Component {
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSetName: (newName) => {
      dispatch(userActions.sign_in(newName))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
