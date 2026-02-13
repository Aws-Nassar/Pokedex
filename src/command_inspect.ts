import {State} from "./state.js";

//catch call back function
export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (!args[0])
    {
        console.log("Enter a Pokemon name");
        return;
    }

    if (!(args[0] in state.pokedex))
    {
        console.log("you have not caught that pokemon");
        return;
    }

    const pokemonInfo = await state.pokeapi.fetchPokemon(args[0]);

    if (!pokemonInfo)
    {   
        console.log("Unknown Pokemon name");
        return;
    }

    console.log(`Name: ${pokemonInfo.name}`);
    console.log(`Height: ${pokemonInfo.height}`);
    console.log(`Weight: ${pokemonInfo.weight}`);
    console.log(`Stats:`);
    for (const stat of pokemonInfo.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log(`Types:`);
    for (const typee of pokemonInfo.types) {
        console.log(`  -${typee.type.name}`);
    }
}