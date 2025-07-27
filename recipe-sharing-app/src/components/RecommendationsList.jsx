import React from 'react';
import { useRecipeStore } from './recipeStore';

/**
 * RecommendationsList Component
 * Displays a list of personalized recipe recommendations.
 * Recommendations are generated based on the user's favorites.
 */
const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  return (
    <div className="recommendations-list">
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations} className="recommend-btn">Get Recommendations</button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to get started!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;