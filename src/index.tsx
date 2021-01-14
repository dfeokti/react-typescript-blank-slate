import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
