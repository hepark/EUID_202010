import React from 'react';
import ReactDOM from 'react-dom';
import './scss/common.scss';

const App = (props) => (
  <div className="app">
    <h1 className="app__title">React 애플리케이션</h1>
  </div>
);

const reactNode = document.querySelector('#react');

ReactDOM.render(<App />, reactNode);
