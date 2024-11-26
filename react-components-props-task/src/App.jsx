import React from "react";
import "./App.css";
import UserCardsList from "./components/UserCardList";

class App extends React.Component {
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
      <>
        <UserCardsList users={this.state.users} />
      </>
    );
  }
}

export default App;
