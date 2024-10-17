class StringCalculator {
    add(numbers) {
      if (numbers === "") {
        return 0;
      }
  
      let delimiters = [",", "\n"];
      let customDelimiterPattern = /^\/\/(.+)\n/;
  
      // Check for custom delimiter
      if (customDelimiterPattern.test(numbers)) {
        let match = numbers.match(customDelimiterPattern);
        let customDelimiter = match[1];
        delimiters.push(customDelimiter);
        numbers = numbers.slice(match[0].length);  // Remove the custom delimiter line from the numbers
      }
  
      // Create a regex pattern to split based on delimiters
      let delimiterPattern = new RegExp(`[${delimiters.join('')}]`);
      let numList = numbers.split(delimiterPattern).map(num => num.trim());
  
      // Convert to integers, filter out empty values
      let numberArray = numList.map(Number).filter(num => !isNaN(num));
  
      // Check for negative numbers
      let negatives = numberArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
      }
  
      // Sum the numbers
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  // Example Usage
  let calculator = new StringCalculator();
  
  console.log(calculator.add(""));               // Output: 0
  console.log(calculator.add("1"));              // Output: 1
  console.log(calculator.add("1,5"));            // Output: 6
  console.log(calculator.add("1\n2,3"));         // Output: 6
  console.log(calculator.add("//;\n1;2"));       // Output: 3
  
  // This will throw an error
   console.log(calculator.add("1,-2,3,-4"));   // Negative numbers not allowed: -2, -4
  