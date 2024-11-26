import React from "react";
import UserCard from "../UserCard";

class UserCardsList extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserCardsList;
