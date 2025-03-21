class StringCalculator {
    add(numbers) {
      if(!numbers) return 0;
      const validNumbers = this.extractNumbers(numbers);
      return validNumbers.reduce((sum, number) => sum + number, 0);
    }
    extractNumbers(numbers) {
      let delimiterPattern = /,|\n/;
    
      if (numbers.startsWith("//")) {
        const delimiterSection = numbers.match(/^\/\/(.*?)\n/)[1];
        numbers = numbers.split("\n").slice(1).join("\n");
        const customDelimiters = delimiterSection.match(/\[.*?\]/g);
        if (customDelimiters) {
          const escapedDelimiters = customDelimiters.map(d =>
            d.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          );
          delimiterPattern = new RegExp(escapedDelimiters.join("|"), "g");
        } else {
          delimiterPattern = new RegExp(
            delimiterSection.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"
          );
        }
      }
    
      console.log("🔹 Raw Input:", numbers);
      console.log("🔹 Using Delimiter Pattern:", delimiterPattern);
    
      numbers = numbers.replace(/\n+/g, "\n");
      const extractedNumbers = numbers.split(delimiterPattern).map(num => {
        const parsedNum = Number(num.trim());
        return isNaN(parsedNum) ? 0 : parsedNum;
      }).filter(number => number<1001);
    
      console.log("🔹 Extracted Numbers:", extractedNumbers);
    
      const negatives = extractedNumbers.filter(num => num < 0);
      console.log("🚨 Negatives Detected:", negatives);
    
      if (negatives.length > 0) {
        const errorMessage = `negative numbers not allowed ${negatives.join(", ")}`;
        console.log("❌ Throwing Error with Message:", errorMessage);
        throw new Error(errorMessage);
      }
    
      return extractedNumbers;
    }        
    
  }
  
  module.exports = StringCalculator;