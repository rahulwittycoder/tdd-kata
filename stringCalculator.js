class StringCalculator {
    add(numbers) {
      if(!numbers) return 0;
      const validNumbers = this.extractNumbers(numbers);
      return validNumbers.reduce((sum, number) => sum + number, 0);
      // return numbers.split(",").map(num=>parseInt(num,10) || 0).reduce((sum, number) => sum + number, 0);
    }
    extractNumbers(numbers) {
      var extractedNumbers = numbers.match(/-?\d+/g)?.map(Number) || [];
      extractedNumbers = extractedNumbers.filter(number => number <= 1000);
      const negativeNumbers = extractedNumbers.filter(number => number < 0);
      console.log(negativeNumbers)
      if(negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
      }
      return extractedNumbers;
    }
  }
  
  module.exports = StringCalculator;  