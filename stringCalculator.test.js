const StringCalculator = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});
