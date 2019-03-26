import React from 'react'
import User from './User'
import UserForm from './UserForm'
import { Button } from 'semantic-ui-react';

class UserProfile extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state

    return (
      <>
        <Button inverted color='red' onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
          <UserForm { ...this.props } closeForm={this.toggleForm} />
        :
          <User />
        }
      </>
    )
  }
}

export default UserProfile