import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function (query) {
    return axios.get("https://api.yummly.com/v1/api/recipes", {
      params: {
        _app_id: "d8ede27b",
        _app_key: "fcfc836b84d4481049d4da88f3b311a6",
        q: query,
        requirePictures: true
      }
    });
  },
  getRec: function() {
    return axios.get("/api/recipes");
  },
  // Gets the book with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the book with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a book to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  }

};
