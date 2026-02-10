import { exit } from "node:process";
import readline from "node:readline";
import {getCommands} from "./commands.js";
import { get } from "node:http";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(/\s+/);
    }

export function startREPL() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (input) => {
        const words = cleanInput(input);
        if (words.length === 0)
        {
            rl.prompt();
            return;
        }

        const commands = getCommands();
        if (typeof commands !== "undefined") {
            const cmd = commands[words[0]];
            cmd.callback(commands);
        }
        rl.prompt();

    });
    }