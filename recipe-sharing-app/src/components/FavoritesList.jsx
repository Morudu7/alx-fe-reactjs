import React from 'react';
import { useRecipeStore } from './recipeStore';

/**
 * FavoritesList Component
 * Displays a list of the user’s favorite recipes.
 * It retrieves the full recipe details by mapping favorite IDs to the recipes list.
 */
const FavoritesList = () => {
  // 1. Select the raw data arrays from the store.
  // This will only cause a re-render if the recipes or favorites arrays themselves change.
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  // 2. Do the filtering logic inside the component.
  // This computation happens during render but doesn't trigger a new update.
  const favoriteRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id)); 

  return (
    <div className="favorites-list">
      <h2>My Favorites Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any favorites recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;