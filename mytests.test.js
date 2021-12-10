const stringLength = require("./stringLength");
const reverseString = require("./reverse-string");
const Calculator = require("./calculator");

describe("String Length Tests", () => {
  test("stringLength", () => {
    expect(stringLength("Richard")).toBe(7);
  });

  test("stringLengthGreaterThan", () => {
    expect(stringLength("Ri")).toBeGreaterThan(1);
  });

  test("stringLengthLessThan", () => {
    expect(stringLength("Richard")).toBeLessThan(10);
  });
});

describe("Reverse strings tests", () => {
  test("ReverseString", () => {
    expect(reverseString("Richard")).toBe("drahciR");
  });
});

describe("Calculator operations", () => {
  const numbers = [10, 2];
  let calc = new Calculator(numbers);
  test("addition", () => {
    expect(calc.add()).toBe(12);
  });

  test("subtraction", () => {
    expect(calc.minus()).toBe(8);
  });

  test("multiplication", () => {
    expect(calc.multiply()).toBe(20);
  });

  test("division", () => {
    expect(calc.divide()).toBe(5);
  });
});
