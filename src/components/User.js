import React from 'react'
import { Card } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.firstname } { value.lastname }</Card.Header>
          <Card.Meta>Email: { value.email }</Card.Meta>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)

export default User
