// src/components/RecipeForm.js
// This is the reusable form for adding and editing recipes.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeForm = ({ recipeId }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation.

  // Fetching actions and data from the store.
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipeToEdit = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const isEditing = !!recipeToEdit;

  // Initialize state from the recipe if we are editing.
  const [title, setTitle] = useState(isEditing ? recipeToEdit.title : '');
  const [description, setDescription] = useState(isEditing ? recipeToEdit.description : '');
  const [ingredients, setIngredients] = useState(isEditing ? recipeToEdit.ingredients.join(', ') : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !ingredients) {
      alert('Please fill in all fields.');
      return;
    }

    const recipeData = {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
    };

    if (isEditing) {
      updateRecipe({ ...recipeData, id: recipeId });
      navigate(`/recipe/${recipeId}`); // Navigate to details page after update.
    } else {
      addRecipe(recipeData);
      navigate('/'); // Navigate to home page after adding.
    }
  };

  return (
    <div className="max-w-lg mx-auto">
        <button onClick={() => navigate(isEditing ? `/recipe/${recipeId}` : '/')} className="mb-4 text-blue-500 hover:underline">
            &larr; Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{isEditing ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
                <input
                    type="text" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., Flour, Sugar, Eggs"
                    required
                />
                 <p className="mt-2 text-xs text-gray-500">Please separate ingredients with a comma.</p>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    {isEditing ? 'Update Recipe' : 'Add Recipe'}
                </button>
            </div>
        </form>
    </div>
  );
};

export default RecipeForm;