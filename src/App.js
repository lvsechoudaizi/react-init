import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
    return (
      <Switch>
        <Route path="/" component={Textarea} />
        <Route path="/system" component={CSSModules} />
      </Switch>
    );
  }
}

export default hot(module)(App);
