import {CLICommand} from "./command.js";

// help callback function 
export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    const cmdValues = Object.values(commands);
    for (const cmd of Object.values(commands)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}