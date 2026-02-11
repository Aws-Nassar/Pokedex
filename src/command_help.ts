import {State} from "./state.js";

// help callback function 
export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    const cmdValues = Object.values(state.commands);
    for (const cmd of Object.values(cmdValues)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
    state.readline.prompt();
}