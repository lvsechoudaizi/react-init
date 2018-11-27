import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Textarea from './components/form/textarea';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Textarea />
      </div>
    );
  }
}

export default hot(module)(App);
