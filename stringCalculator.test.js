const StringCalculator = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("returns the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});
