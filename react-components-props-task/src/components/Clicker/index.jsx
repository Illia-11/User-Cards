import React from "react";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0,
      autoClicker: null,
    };
  }

  clickForIncrement = () => {
    this.setState({
      clickCounter: prevState.clickCounter + 1,
    });
  };

  autoClick = (interval) => {
    const autoClicker = setInterval(() => {
      this.setState({
        clickCounter: clickCounter + 1,
      });
    }, interval);

    this.setState({ autoClicker });
  };

  stopAutoClicker = () => {
    if (this.state.autoClicker) {
      clearInterval(this.state.autoClicker);
      this.setState({ autoClicker: null });
    }
  };

  componentWillUnmount() {
    this.stopAutoClicker();
  }

  render() {
    const { clickCounter, autoClicker } = this.state;

    return (
      <div>
        <button onClick={this.clickForIncrement}>Click it</button>
        <button onClick={() => this.autoClick(1000)}>
          Start Auto Click (1s)
        </button>
        <button onClick={() => this.autoClick(2000)}>
          Start Auto Click (2s)
        </button>
        <button onClick={() => this.autoClick(5000)}>
          Start Auto Click (5s)
        </button>
        <button onClick={() => this.autoClick(10000)}>
          Start Auto Click (10s)
        </button>
        <button onClick={this.stopAutoClicker}>Stop Auto Click</button>
        <p>Click Count: {clickCounter}</p>
        {autoClicker && <p style={{ color: "green" }}>Auto Click is Active!</p>}
      </div>
    );
  }
}

export default Clicker;
