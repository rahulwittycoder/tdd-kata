const StringCalculator = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("returns the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

test("returns the sum of two numbers with a custom delimiter", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});

test("returns the sum of multiple numbers with a custom delimiter", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2;3;4;5;\n\n6\n7")).toBe(28);
});