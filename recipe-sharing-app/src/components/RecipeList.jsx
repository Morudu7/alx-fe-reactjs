 import React from 'react';
 import { Link } from 'react-router-dom'
 import RecipeDetails from './RecipeDetails'
 import SearchBar from './SearchBar';
 import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
   const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();
   const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  // Handler to toggle favorite status
  const handleToggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };
  
    return (
      <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-item">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <button
            onClick={() => handleToggleFavorite(recipe.id)}
            className={favorites.includes(recipe.id) ? 'unfavorite-btn' : 'favorite-btn'}
          >
            {favorites.includes(recipe.id) ? 'Unfavorite' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;