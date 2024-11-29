import React from "react";
import UserCard from "../UserCard";

const UserCardList = ({ users, toggleFriendStatus }) => {

    return (
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleMyFriends={toggleFriendStatus}
          />
        ))}
      </div>
    );
  }


export default UserCardList;
