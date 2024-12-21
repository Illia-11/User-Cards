import "./UserCard.css";

const UserCard = ({ user, toggleMyFriends }) => {
  return (
    <article
      className={`users-card ${
        user.gender === "male" ? "male" : user.gender === "female"
          ? "female"
          : "default"
      }`}
    >
      <h2>{user.name}</h2>
      <p>Id: {user.id}</p>
      <p>Gender: {user.gender || "Not specified"}</p>
      <button onClick={() => toggleMyFriends(user.id)}>
        {user.isFriend ? "Delete Friend" : "Make Friend"}
      </button>
    </article>
  );
};

export default UserCard;
