import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  closeCache() {
    this.cache.stopReapLoop();
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    pageURL = pageURL || PokeAPI.baseURL + "/location-area";
    const cached = this.cache.get<ShallowLocations>(pageURL);
    if (cached) 
      return cached;

    try {
      const response = await fetch(pageURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

    const locations: ShallowLocations = await response.json();
    this.cache.add(pageURL, locations);
    return locations;

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
