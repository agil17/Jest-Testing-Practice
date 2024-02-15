import { capitalize } from "./capitalize";

test("Capitalizes first letter in string 'word'", () => {
  expect(capitalize("word")).toBe("Word");
});
