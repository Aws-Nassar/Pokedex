import {CLICommand, State} from "./state.js";
import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import {commandMap} from "./command_map.js";
import {commandMapb} from "./command_mapb.js";
import {commandExplore} from "./command_explore.js";
import {commandCatch} from "./command_catch.js";
import {commandInspect} from "./command_inspect.js";



// Creating object literal of supported commands
export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the names of 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the names of the previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Display list of all the Pokémon in a given area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch some Pokemon and add them to Pokedex",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Display the captured Pokemon/s info inside the Pokedex",
      callback: commandInspect,
    },
  };
}
