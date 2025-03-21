class StringCalculator {
    add(numbers) {
      return numbers.split(",").map(num=>parseInt(num,10) || 0).reduce((sum, number) => sum + number, 0);
    }
  }
  
  module.exports = StringCalculator;  