export default recipe => `
    <section class="recipe--${recipe.id}">
        <header class="recipe__title">
            ${recipe.title}
        </header>
        <div class="recipe__instructions">
            ${recipe.instructions}
        </div>
        <button id="deleteRecipe--${recipe.id}">
            Delete Recipe
        </button>
    </section> 
`
// entire object is wrapped in a section with the class being recipe--id and then populated with dot notation for each section.  delete button is given id to work with click event listener

// section class by id is done for delete fetch call to identify what is being deleted