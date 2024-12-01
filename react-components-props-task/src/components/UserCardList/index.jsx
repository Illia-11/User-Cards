import React from "react";
import UserCard from "../UserCard";

const UserCardList = ({ users, toggleFriendStatus }) => {

    return (
      <>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleMyFriends={toggleFriendStatus}
          />
        ))}
      </>
    );
  }


export default UserCardList;
