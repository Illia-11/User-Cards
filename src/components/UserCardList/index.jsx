import UserCard from "../UserCard";

const UserCardList = ({ users, toggleFriendStatus }) => {
  const userCards = users.map((user) => (
    <UserCard key={user.id} user={user} toggleMyFriends={toggleFriendStatus} />
  ));

  return userCards;
};

export default UserCardList;
