import React from "react";
import "./UserCard.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFriend: false,
    };
  }

  clickHandler = () => {
    this.setState({
      isFriend: true,
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
        <button onClick={this.clickHandler}>Make Friend</button>
      </article>
    );
  }
}

export default UserCard;
