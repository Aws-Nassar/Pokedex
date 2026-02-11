import  {State} from "./state.js"

export async function commandMap(state: State): Promise<void> {
    const locationNames = await state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined);

    for (const locationName of locationNames.results) {
        console.log(locationName.name);
    }

    state.nextLocationsURL = locationNames.next;
    state.prevLocationsURL = locationNames.previous;
}