import React from 'react';
import { render } from 'react-dom';

const App = (props) => (
  <div className="app">
    <h1 className="app__title">React 앱 개발 시작하기!</h1>
  </div>
);

const reactNode = document.querySelector('#react');

render(<App />, reactNode);
