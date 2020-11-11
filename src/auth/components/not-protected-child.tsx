import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';

const NotProtectedChild = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Protected 1</h1>
      </header>
      <Link to="/">Home</Link>
      <User />
    </div>
  );
};

export default NotProtectedChild;
