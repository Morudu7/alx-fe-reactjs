import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import recipesData from '../data.json';

const RecipeDetail = () => {
  // Get the 'id' from the URL parameters
  const { id } = useParams();

  // State to hold the recipe and loading status
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch recipe details when the component mounts or id changes
  useEffect(() => {
    // Set loading to true when starting to "fetch"
    setLoading(true);

    // Find the recipe with the matching id from our JSON data
    // The parseInt() is important because the id from useParams is a string
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    
    // Simulate a network delay (e.g., 500ms) for a better user experience
    const timer = setTimeout(() => {
      setRecipe(foundRecipe);
      setLoading(false);
    }, 500);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);

  }, [id]); // The effect depends on the 'id' from the URL

  // Display a loading message while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">Loading recipe...</h1>
      </div>
    );
  }

  // If no recipe is found, display a message
  if (!recipe) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-700">Recipe not found!</h1>
        <Link to="/" className="text-cyan-500 hover:underline mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 text-lg mb-8">{recipe.summary}</p>

            {/* Ingredients Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/" className="text-cyan-500 hover:underline font-semibold">
                &larr; Back to All Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;