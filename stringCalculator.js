class StringCalculator {
    add(numbers) {
      if(!numbers) return 0;
      const validNumbers = this.extractNumbers(numbers);
      return validNumbers.reduce((sum, number) => sum + number, 0);
      // return numbers.split(",").map(num=>parseInt(num,10) || 0).reduce((sum, number) => sum + number, 0);
    }
    extractNumbers(numbers) {
      return numbers.match(/\d+/g)?.map(Number) || []; 
    }
  }
  
  module.exports = StringCalculator;  