import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementIfOdd, incrementAsync } from "../actions";

export class App extends Component {
  handleIncrement() {
    this.props.dispatch(increment());
  }

  handleDecrement() {
    this.props.dispatch(decrement());
  }

  handleIncrementIfOdd() {
    this.props.dispatch(incrementIfOdd());
  }

  handleIncrementAsync() {
    this.props.dispatch(incrementAsync());
  }

  render() {
    return (
      <div>
        <h1>Counter example</h1>
        <p>
          Clicked: { this.props.counter } times
          {" "}
          <button className="increment" onClick={ ::this.handleIncrement }>+</button>
          {" "}
          <button className="decrement" onClick={ ::this.handleDecrement }>-</button>
          {" "}
          <button className="incrementIfOdd" onClick={ ::this.handleIncrementIfOdd }>Increment if odd</button>
          {" "}
          <button className="incrementAsync" onClick={ ::this.handleIncrementAsync }>Increment async</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(App);
