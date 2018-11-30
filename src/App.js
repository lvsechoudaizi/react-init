import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Textarea from './components/form/textarea';
import CSSModules from './components/cssModules';
import pathHoc from './components/hoc/pathHoc';

@pathHoc
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const foo = 'bar';
    const bar = { foo };
    console.log('bar', bar);
    return (
      <div>
        <CSSModules />
      </div>
    );
  }
}

export default hot(module)(App);
