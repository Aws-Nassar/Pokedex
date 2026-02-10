// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState, State } from "./state.js";

function main() {
  let state: State = initState();
  startREPL(state);
}

main();
