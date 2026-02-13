import {State} from "./state.js";

//catch call back function
export async function commandPokedex(state: State): Promise<void> {

    if (Object.keys(state.pokedex).length === 0)
    {
        console.log("you have not caught any pokemon yet");
        return;
    }

    console.log("Your Pokedex:");
    for (const [name, ] of Object.entries(state.pokedex)) {
        console.log(`- ${name}`);
    }

}