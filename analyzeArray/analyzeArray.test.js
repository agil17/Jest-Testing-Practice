import { analyzeArray } from "./analyzeArray";

test("Return min, max, length, and average of an input array", () => {
  expect(analyzeArray([2, 5, 3, 6, 4, 1])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});
