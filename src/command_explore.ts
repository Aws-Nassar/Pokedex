import {State } from "./state.js";

//explore call back function
export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (!args[0])
    {
        console.log("Enter a location area");
        return;
    }
    console.log(`Exploring ${args[0]}...`);
    const locationInfo = await state.pokeapi.fetchLocation(args[0]);
    if (!locationInfo)
    {
        console.log("Unknown location area");
    }
    console.log("Found Pokemon:");
    for (const locationName of locationInfo.pokemon_encounters) {
        console.log(`- ${locationName.pokemon.name}`);
    }
}