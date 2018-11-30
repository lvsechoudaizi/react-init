import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import '@babel/polyfill';
import App from './App';

const renderDom = (Component) => {
  render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('app'),
  );
};
renderDom(App);
