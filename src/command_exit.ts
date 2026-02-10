import {State } from "./state.js";

//exit call back function
export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    process.exit(0);
}