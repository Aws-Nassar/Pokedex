import { exit } from "node:process";
import readline from "node:readline";
import {getCommands} from "./commands.js";
import { get } from "node:http";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input.length === 0?[] : input.trim().toLowerCase().split(/\s+/);
}

export function startREPL(state: State) {
    state.readline.prompt();
    state.readline.on("line", (input) => {
        const words = cleanInput(input);
        if (words.length === 0)
        {
            state.readline.prompt();
            return;
        }
        const cmd = state.commands[words[0]];
        if (cmd) {
            try{
                cmd.callback(state);
            } catch (err) {
                console.log(`Error Occuaredd: ${err}`);
            }
        } else {
            console.log(`Unknown command: ${words[0]}`);
        }
        state.readline.prompt();
    });
}