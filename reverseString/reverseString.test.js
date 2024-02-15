import { reverseString } from "./reverseString";

test("Reverse a given string", () => {
  expect(reverseString("Hello, World")).toMatch(/dlroW ,olleH/);
});
