import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // A single handler for all input changes
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split('\n').filter(item => item.trim() !== '').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, each on a new line.';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required.';
    }
    
    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send this data to a server.
      // For now, we'll just log it and show an alert.
      console.log('Form Submitted:', formData);
      alert('Recipe submitted successfully! (Check the console for the data)');
      // Navigate back to the home page after successful submission
      navigate('/');
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Recipe Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-cyan-500'}`}
                placeholder="e.g., Classic Beef Burgers"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-cyan-500'}`}
                placeholder="List each ingredient on a new line."
              ></textarea>
              {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
            </div>

            {/* Preparation Steps */}
            <div className="mb-6">
              <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="8"
                className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 ${errors.instructions ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-cyan-500'}`}
                placeholder="Describe the cooking process step by step."
              ></textarea>
              {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition-colors duration-300 w-full"
              >
                Add Recipe
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <Link to="/" className="text-cyan-500 hover:underline font-semibold">
              &larr; Cancel and go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;