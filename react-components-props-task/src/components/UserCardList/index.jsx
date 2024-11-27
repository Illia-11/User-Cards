import React from "react";
import UserCard from "../UserCard";

class UserCardsList extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "Kamila",
        gender: "female",
      },
      {
        id: 2,
        name: "Pavlo",
        gender: "male",
      },
      {
        id: 3,
        name: "Htos",
        gender: "undefined",
      },
      {
        id: 4,
        name: "Ola",
        gender: "female"
      }
    ],
  };


  render() {

    return (
      <div>
        {this.state.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserCardsList;
