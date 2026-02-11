import  {State} from "./state.js"

export async function commandMapb(state: State): Promise<void> {
    if (!state.prevLocationsURL)
    {
        console.log("you're on the first page");
        state.readline.prompt();
        return;
    }
        const locationNames = await state.pokeapi.fetchLocations(state.prevLocationsURL)

    for (const locationName of locationNames.results) {
        console.log(locationName.name);
    }

    state.nextLocationsURL = locationNames.next ?? "";
    state.prevLocationsURL = locationNames.previous ?? "";
}