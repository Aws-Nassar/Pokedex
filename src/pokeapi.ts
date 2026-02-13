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
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(msg);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.cache.get<Location>(url);
    
    if (cached) 
        return cached;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const locationInfo: Location = await response.json();
      this.cache.add(url, locationInfo);
      return locationInfo;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(msg);
    }
  }
  
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const safeName = encodeURIComponent(pokemonName.trim().toLowerCase());
    const url = `${PokeAPI.baseURL}/pokemon/${safeName}`;
    const cached = this.cache.get<Pokemon>(url);
    
    if (cached) 
        return cached;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const PokemonInfo: Pokemon = await response.json();
      this.cache.add(url, PokemonInfo);
      return PokemonInfo;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(msg);
    }
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
  id: number;
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
    };
  }[];
};

export type Pokemon = {
  name: string;
  base_experience: number;
};
