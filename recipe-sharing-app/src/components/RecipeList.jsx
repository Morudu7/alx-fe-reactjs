 import React from 'react';
 import { Link } from 'react-router-dom'
 import RecipeDetails from './RecipeDetails'
 import SearchBar from './SearchBar';
 import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
     const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
    <div>
      <SearchBar />
      <ul>
        {filteredRecipes.map(recipe => (
          <RecipeDetails key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
    );
  }

  export default RecipeList;