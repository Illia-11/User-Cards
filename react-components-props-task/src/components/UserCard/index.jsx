import React from "react";
import "./UserCard.css";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    const cardClass = `users-card ${
      user.gender === 'male' ? 'male' : user.gender === 'female' ? 'female' : 'users-card'
    }`;
    return (
      <article className={cardClass}>
        <h2>{user.name}</h2>
        <p>Id: {user.id}</p>
        <p>Gender: {user.gender}</p>
      </article>
    );
  }
}

export default UserCard;
