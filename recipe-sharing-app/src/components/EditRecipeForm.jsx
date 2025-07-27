import React from "react";
import { useRecipeStore } from "./recipeStore";


const EditRecipeForm = ({ recipe, onSave, onCancel }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    onSave();
  };

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Edit Recipe</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="edit-title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input id="edit-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="edit-description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea id="edit-description" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" />
            </div>
            <div className="flex items-center gap-4">
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
                <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            </div>
        </form>
    </div>
  );
};

export default EditRecipeForm;
