import React from 'react';
import { useRecipeStore } from './components/recipeStore';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {

  return (
    <>
     <RecipeList />
     <AddRecipeForm />
    </>

  );
};

export default App
