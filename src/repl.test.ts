import {cleanInput} from "./repl";
import { describe, expect, test} from "vitest"

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
    // TODO: more test cases here
  {
    input: "  Aws            Ahmed            Nassar  ",
    expected: ["Aws", "Ahmed", "Nassar"],
  },
  {
    input: "  he   llo  world  ",
    expected: ["he", "llo", "world"],
  },
  {
    input: "  hi  world  ",
    expected: ["hi", "world"],
  },
  {
    input: "  aws  world  ",
    expected: ["aws", "world"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
    const actual = cleanInput(input);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});