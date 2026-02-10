import { createInterface, type Interface } from "readline";
export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};  

export function initState(): State {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
        });
        rl.prompt();
    return ;

}