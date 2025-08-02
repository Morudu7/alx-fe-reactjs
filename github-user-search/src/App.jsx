
// src/App.js
import React from 'react';
import Search from './components/search';
import './App.css'; // Optional: for basic styling
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '100px', fontFamily: 'georgia', color: 'white'}}><a style={{color: 'green'}}>GitHub</a> User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;