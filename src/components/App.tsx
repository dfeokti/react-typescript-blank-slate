import React from 'react';
import './App.css';
import Cat from '../../public/images/cat.jpg';

export const App = () => {
  return (
    <div>
      <p>Environment: {process.env.NODE_ENV}</p>
      <img src={Cat}></img>
    </div>
  );
};
