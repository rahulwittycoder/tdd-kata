const StringCalculator = require("./stringCalculator");
//Test Case 1 For Empty String
test("returns 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

//Test Case 2 for single line , separated positive numbers
test("returns the sum of multiple numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

//Test Case 3 for multiple positive numbers with new line as delimiter
test("returns the sum of multiple numbers with new line character", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("\n1\n2\n3\n4\n5")).toBe(15);
});

//Test Case 4 for inline positive and negative numbers
test("throws an error for negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed -2, -4");
});

//Test Case 5 for positive and negative numbers with new line as delimiter
test("throws an error for negative numbers having new line character in input", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1\n-2\n3\n-4")).toThrow("negative numbers not allowed -2, -4");
});

//Test Case 6 for positive number string with custom delimiter and new line characters
test("returns the sum of multiple numbers with a custom delimiter and new line character", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2;3;4;5;\n\n6\n7")).toBe(28);
});

//Test Case 7 for postive and negative numbers with custom delimiter and new line characters
test("throws an error when negatives present in string of multiple numbers with new line character and custom delimiter", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("//;\n1;-2;3;-4;5;\n\n6\n7")).toThrow("negative numbers not allowed -2, -4");
});

//Test Case 8 for positive numbers with new line, varying length custom delimiter
test("returns the sum of multiple numbers with a varying length custom delimiter", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
});

//Test Case 9 for positive numbers with new line and varying custom delimiters
test("returns the sum of multiple numbers with custom delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
});

//Test Case 10 for positive numbers with new line, varying length and varying custom delimiters
test("returns the sum of multiple numbers with a varying length custom delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*****][%%%]\n1*****2%%%3")).toBe(6);
});

//Test Case 11 for positive and negative numbers with new line and varying custom delimiters
test("throws error when negatives present in string of multiple numbers with new line and multiple custom delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*][%]\n1*-2%3%-4")).toThrow("negative numbers not allowed -2, -4");
});

//Test Case 12 for positive and negative numbers with new line, varying length and varying custom delimiters
test("throws error when negatives present in string of multiple numbers with new line, varying length varying custom delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*****][%%%]\n1*****-2%%%3%%%-4")).toThrow("negative numbers not allowed -2, -4");
});

//Test Case 13 for ignoring numbers greater than 1000
test("neglects numbers greater than 1000", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*****][%%%]\n1*****2%%%3*****1001")).toBe(6);
});