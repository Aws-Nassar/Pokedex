import { resourceLimits } from "node:worker_threads";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    pageURL = pageURL || PokeAPI.baseURL + "/location-area";
    try {
      const response = await fetch(pageURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

    const result: ShallowLocations = await response.json();
    return result;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    return Promise;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  // add properties here
};
