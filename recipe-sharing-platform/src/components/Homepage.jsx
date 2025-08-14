import { useState, useEffect } from "react";
import recipesData from '../data.json'

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

useEffect (() => {
    setRecipes(recipesData);
}, []);
    return (
         <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          HALOfood Recipes
        </h1>

        {/* Responsive Grid for Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
                 
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{recipe.title}</h2>
                <p className="text-gray-700 mb-4">{recipe.summary}</p>
                <a 
                  href={`/recipe/${recipe.id}`} 
                  className="inline-block bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-cyan-600 transition-colors duration-300"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default HomePage;