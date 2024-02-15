import { calculator } from "./calculator";

describe("Calculator functions test", () => {
  test("Takes two numbers and adds them", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("Takes two numbers and subtracts them", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  test("Takes two numbers and multiplies them", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("Takes a number and 0 as second parameter, returns can't divide by 0", () => {
    expect(calculator.divide(2, 0)).toBe("Can't divide by 0");
  });
  test("Takes a number and 0 as second parameter, returns can't divide by 0", () => {
    expect(calculator.divide(2, 3)).toBeCloseTo(0.6666);
  });
});
