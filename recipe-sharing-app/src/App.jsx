
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ textAlign: 'center'}}>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-wider">
              Recipe Sharing App
            </h1>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </main>
      <footer className="text-center py-4 mt-8 text-gray-500 text-sm">
        <p>Built with React, Zustand & React Router</p>
      </footer>
    </div>
  );
}

export default App;
