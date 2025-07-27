import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Initial state remains the same.
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'] },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy chicken dish.', ingredients: ['Chicken Breast', 'Onion', 'Garlic', 'Ginger', 'Coconut Milk', 'Curry Powder'] },
   { id: 3, title: 'Beef Tacos', description: 'Spicy and savory beef tacos.', ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomato', 'cheese'], category: 'Beef' },
    { id: 4, title: 'Lentil Soup', description: 'A hearty and healthy lentil soup.', ingredients: ['lentils', 'carrots', 'celery', 'onion', 'vegetable broth'], category: 'Soup' },
    { id: 5, title: 'Pesto Pasta', description: 'Simple and delicious pasta with pesto sauce.', ingredients: ['pasta', 'pesto', 'parmesan', 'pine nuts'], category: 'Pasta' },
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

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

   filteredRecipes: [],
   filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
     recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
})),

  favorites: [],
  recommendations: [],

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations based on the categories of favorite recipes
  generateRecommendations: () => set(state => {
    // 1. Get the 'category' of each favorited recipe
    const favoriteCategories = state.recipes
      .filter(recipe => state.favorites.includes(recipe.id))
      .map(recipe => recipe.category);
    
    // 2. Find other recipes that are not favorited but share a category with a favorite
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && favoriteCategories.includes(recipe.category)
    );
    
    return { recommendations: recommended };
  }),

  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, { ...recipe, id: Date.now() }]
  })),
}));

export { useRecipeStore };