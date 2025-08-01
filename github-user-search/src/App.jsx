
// src/App.js
import React from 'react';
import Search from './components/search';
import './App.css'; // Optional: for basic styling
import 'tailwindcss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;