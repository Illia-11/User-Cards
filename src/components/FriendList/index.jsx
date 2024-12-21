function FriendList (props) {
  const { users } = props;

  const myFriend = users.map((user) => {
    return <li key={user.id}>
      <p>{user.name}</p>
    </li>
  })

  return <article>
    <h2>Friend List</h2>
    <ul>{myFriend}</ul>
  </article>
}

export default FriendList;