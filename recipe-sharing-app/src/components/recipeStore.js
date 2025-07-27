import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Initial state remains the same.
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'] },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy chicken dish.', ingredients: ['Chicken Breast', 'Onion', 'Garlic', 'Ginger', 'Coconut Milk', 'Curry Powder'] },
  ],
  nextId: 3,

  // Actions are unchanged.
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: state.nextId }],
      nextId: state.nextId + 1,
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));

export { useRecipeStore };