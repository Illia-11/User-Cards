import React, { Component } from "react";
import UserCardList from "../UserCardList";
import FriendList from "../FriendList";

class UserDashboard extends Component {
  state = {
        users: [
          {
            id: 1,
            name: "Kamila",
            gender: "female",
            isFriend: false
          },
          {
            id: 2,
            name: "Pavlo",
            gender: "male",
            isFriend: false
          },
          {
            id: 3,
            name: "Htos",
            gender: "undefined",
            isFriend: false
          },
          {
            id: 4,
            name: "Ola",
            gender: "female",
            isFriend: false
          }
        ],
      };

  toggleFriendStatus = (userId) => {
    const updatedUsers = this.state.users.map((user) => {
      if (user.id === userId) {
        return { ...user, isFriend: !user.isFriend };
      } else {
        return user;
      }
    });

    this.setState({
      users: updatedUsers,
    });
  };

  render() {
    const { users } = this.state;
    const friends = users.filter((user) => user.isFriend);

    return (
      <>
        <h1>Панель користувачів</h1>
        <UserCardList
          users={this.state.users}
          toggleFriendStatus={this.toggleFriendStatus}
        />
        <FriendList users={friends} />
      </>
    );
  }
}

export default UserDashboard;
