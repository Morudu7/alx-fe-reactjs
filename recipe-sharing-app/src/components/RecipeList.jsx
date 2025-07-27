 import React from 'react';
 import { Link } from 'react-router-dom'
 import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">All Recipes</h2>
        <Link to="/add" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Add New Recipe
        </Link>
      </div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <li key={recipe.id} className="py-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{recipe.title}</h3>
                <p className="text-gray-500">{recipe.description}</p>
              </div>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline font-semibold">
                View Details
              </Link>
            </li>
          </div>
        ))}
      </div>
    );
  }

  export default RecipeList;