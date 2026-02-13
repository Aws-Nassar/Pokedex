import {State } from "./state.js";

//catch call back function
export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (!args[0])
    {
        console.log("Enter a Pokemon name");
        return;
    }

    if (args[0] in state.pokedex)
    {
        console.log(`You already have ${args[0]}`);
        return;
    }

    const pokemonInfo = await state.pokeapi.fetchPokemon(args[0]);

    if (!pokemonInfo)
    {   
        console.log("Unknown Pokemon name");
        return;
    }

    console.log(`Throwing a Pokeball at ${args[0]}...`);

    const catchChance = 50 / pokemonInfo.base_experience;
    if (catchChance > Math.random())
    {
        state.pokedex[args[0]] = pokemonInfo;
        console.log(`${args[0]} was caught!`);
        return;
    }

    console.log(`${args[0]} escaped!`);
}