export default {
    // fetch call to send what is deleted to api and actually delete it.  accepts parameter who's argument denotes what is deleted
    deleteRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    // initial fetch call to return all entries
    getAllRecipes () {
        return fetch("http://localhost:8088/recipes")
            .then(response => response.json())
    }
}