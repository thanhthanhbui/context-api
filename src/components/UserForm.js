import React from 'react'
import { Form } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'

class UserForm extends React.Component {
  state = { 
    firstname: this.props.firstname, 
    lastname: this.props.lastname, 
    email: this.props.email, 
    showForm: false
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...this.state }
    this.props.updateUser(user)
    this.props.closeForm()
  }

  render() {
    const { firstname, lastname, email } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='First Name' 
          type='text'
          name='firstname'
          value={firstname}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Last Name' 
          type='text'
          name='lastname'
          value={lastname}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Email' 
          type='text'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button inverted color='blue'>Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm
          { ...props }
          firstname={value.firstname}
          lastname={value.lastname}
          email={value.email}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm