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
        return fetch(`http://localhost:8088/recipes`)
            .then(response => response.json())
    },
    updateFormFields (recipeId) {
        const hiddenRecipeId = document.querySelector("#recipeId")
        const recipeTitleInput = document.querySelector("#recipeTitle")
        const recipeInstructionsInput = document.querySelector("#recipeInstructions")

        fetch(`http://localhost:8088/recipes/${recipeId}`)
        .then(response => response.json())
        .then(recipe => {
            hiddenRecipeId.value = recipe.id
            recipeTitleInput.value = recipe.title
            recipeInstructionsInput.value = recipe.instructions
        })
    },
    editRecipe (id) {
        console.log("api id", id)
        const updatedObject = {
            title: document.querySelector("#recipeTitle").value,
            instructions: document.querySelector("#recipeInstructions").value
        }
        return fetch(`http://localhost:8088/recipes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(res => res.json())
        .then(() => {
            document.querySelector("#recipeId").value = ""
        })
    }
}