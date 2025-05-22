import { Component } from "react";

class StatesInCbc extends Component {
  state = { value: 0 };

  Increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  Decrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  Reset = () => {
    this.setState({ value: (this.state.value = 0) });
  };

  render() {
    console.log(this);
    return (
      <div>
        <h1>States in Class based Components</h1>
        <h2>counter: {this.state.value}</h2>
        <button onClick={this.Increment}> Increment</button>
        <button onClick={this.Decrement}> Decrement</button>
        <button onClick={this.Reset}> Reset</button>
      </div>
    );
  }
}

export default StatesInCbc;
