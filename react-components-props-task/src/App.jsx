import React from "react";
import "./App.css";
import UserCardsList from "./components/UserCardList";

class App extends React.Component {
  render() {
    return (
      <>
        <UserCardsList users={this.users} />
      </>
    );
  }
}

export default App;
