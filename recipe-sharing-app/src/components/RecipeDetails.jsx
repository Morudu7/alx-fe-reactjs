 import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { DeleteRecipeButton } from '../components/DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Hook to get URL parameters.
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div className="text-center text-red-500">
        <p>Recipe not found!</p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">
        &larr; Back to Recipe List
      </button>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.description}</p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">Ingredients</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <div className="mt-8 flex space-x-4">
        <Link to={`/edit/${recipe.id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Edit
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
