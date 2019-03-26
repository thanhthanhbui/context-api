import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    firstname: 'Thanh',
    lastname: 'Bui',
    email: 'thanhbui@gmail.com',
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user })
  }
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;