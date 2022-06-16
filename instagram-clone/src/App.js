import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      
      <div className="app__header">
          <img
          className='app__headerImage'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png"
          alt="logo"
          />
      </div>

      <h1>Hello Filcat here</h1>
      <Post />
    </div>
  );
}

export default App;
