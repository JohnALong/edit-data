import apiActions from "./api.js"
import render from "./dom.js"
import api from "./api.js"

const recipeList = document.querySelector("#recipeList")
const saveButton = document.querySelector("#saveRecipe")

export default {
    registerDeleteListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                // Extract recipe id from the button's id attribute
                const recipeToDelete = event.target.id.split("--")[1]
                // Invoke the delete method, then get all recipes and render them
                apiActions.deleteRecipe(recipeToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(render)
            }
        })
    },
    registerEditListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("editRecipe--")) {
                const recipeIdToEdit = event.target.id.split("--")[1]
                console.log("edit id", recipeIdToEdit)
                apiActions.updateFormFields(recipeIdToEdit)
            }
        })
    },
    registerSaveListener () {
        saveButton.addEventListener("click", event => {
            const hiddenRecipeId = document.querySelector("#recipeId")
            console.log("stuff", hiddenRecipeId.value)
            console.log("id to save", recipeId.value)
            if (hiddenRecipeId.value !== "") {
                apiActions.editRecipe(recipeId.value)
                .then(apiActions.getAllRecipes)
                .then(render)
            } else {
                console.log("save recipe")
            }
        })
    }
}