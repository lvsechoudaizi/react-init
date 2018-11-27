import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.add()} key={10} data-str="jj">增加1</button>
      </div>
    );
  }
}

export default hot(module)(App);
