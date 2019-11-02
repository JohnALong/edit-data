console.log("linked")
import apiActions from "./api.js"
import events from "./events.js"
import recipes from "./dom.js"

// Invoke the method that attaches the event listener
// works because is targeted to hard code html - but actual click event is done as if () statement that designates ONLY the delete button
// avoids issue of button not existing when calling the click event
events.registerDeleteListener()
events.registerEditListener()
events.registerSaveListener()

// Get all recipes from API and render them in the DOM
apiActions.getAllRecipes().then(recipes)