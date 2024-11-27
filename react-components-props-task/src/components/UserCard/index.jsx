import React from "react";
import "./UserCard.css";

class UserCard extends React.Component {

    state = {
      isFriend: false,
    };

  clickHandler = () => {
    this.setState({
      isFriend: true,
    })
  }

  hadnleSwitchFriend = () => {
    this.setState({
      isFriend: !this.state.isFriend
    })
  }

  render() {
    const { user } = this.props;

    return (
      <article className={`users-card ${
      user.gender === 'male' ? 'male' : user.gender === 'female' ? 'female' : 'users-card'
    }`}>
        <h2>{user.name}</h2>
        <p>Id: {user.id}</p>
        <p>Gender: {user.gender}</p>
        <button onClick={this.hadnleSwitchFriend}>{!this.state.isFriend ? "Make Friend" : "Delete Friend"}</button>
      </article>
    );
  }
}

export default UserCard;
