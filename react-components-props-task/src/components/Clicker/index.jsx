import React from "react";
import styles from "./clicker.module.css";

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
      clickCounter: clickCounter + 1,
    });
  };

  autoClick = (interval) => {
    const autoClicker = setInterval(() => {
      this.setState({
        clickCounter: clickCounter + 5,
      });
    }, interval);

    this.setState({ autoClicker });
  };

  stopAutoClicker = () => {
    const { autoClicker } = this.state;
    if (autoClicker) {
      this.setState({ autoClicker: null });
    }
  };

  componentWillUnmount() {
    this.stopAutoClicker();
  }

  render() {
    const { clickCounter, autoClicker } = this.state;

    return (
      <div className={styles.container}>
        <button className={styles.clickBtn} onClick={this.clickForIncrement}>
          Click it
        </button>
        <button
          className={styles.clickBtn}
          onClick={() => this.autoClick(1000)}
        >
          Start Auto Click (1s)
        </button>
        <button
          className={styles.clickBtn}
          onClick={() => this.autoClick(2000)}
        >
          Start Auto Click (2s)
        </button>
        <button
          className={styles.clickBtn}
          onClick={() => this.autoClick(5000)}
        >
          Start Auto Click (5s)
        </button>
        <button
          className={styles.clickBtn}
          onClick={() => this.autoClick(10000)}
        >
          Start Auto Click (10s)
        </button>
        <button className={styles.stopBtn} onClick={this.stopAutoClicker}>
          Stop Auto Click
        </button>
        <p>Click Count: {clickCounter}</p>
        {autoClicker && (
          <p className={styles.activePar}>Auto Click is Active!</p>
        )}
      </div>
    );
  }
}

export default Clicker;
