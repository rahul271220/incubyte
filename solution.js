class StringCalculator {
    add(numbers) {
        // edge case scenrio
        if (numbers == '') { 
            return 0;
        }
        // Split the input by commas to handle multiple numbers
        // let nums = numbers.split(",");
        let current = '';
        let delimiter = ','  //default delimiter
        let arr = [];
        let numberToProcess = numbers;
        // code to find custom delimiter when the string starts with '//'
        if (numbers.substring(0, 2) === "//") {
            // Extract the custom delimiter (everything between "//" and "\n")
            let delimiterEndIndex = numbers.indexOf("\n");
            delimiter = numbers.substring(2, delimiterEndIndex); // Custom delimiter
      
            // Update the numberToProcess to only include the numbers after the "\n"
            numberToProcess = numbers.substring(delimiterEndIndex + 1); // Everything after the "\n"
          }
        for (let i =0; i< numberToProcess.length; i++) {
            let c = numberToProcess[i];
            if (c == '\n' || c == ',' || c == delimiter) {
                if (current) {
                    arr.push(current);
                    current = '';
                }
            }
            else {
                current = current + c;
            }
        }
        if (current){
            arr.push(current);
        }
        //  console.log(arr);
        // Initialize the sum to 0
        let sum = 0;
        
        // Loop through the array, convert each element to a number, and add to the sum
        for (let num of arr) {
            sum += Number(num);  // Convert string to number and add to the sum
        }
        return sum;
    }
  }
  
  // Example test cases
  let calculator = new StringCalculator();  //making object of the class
  console.log(calculator.add('2,3,4'));       // output will be 2+3+4=9
  console.log(calculator.add('1,5'));   // output will be 1+5=7
  console.log(calculator.add('1\n2,4'));  //output will 1+2+4 = 7
  console.log(calculator.add('1\n,22,3'));  //output will 1+22+3 = 26
  console.log(calculator.add("//;\n1;2"));   // custom delimiter = ; output will be 1+2=3
   console.log(calculator.add("//|\n3|4|5"));  // custom delimiter = |  output will be 3+4+5=12
   console.log(calculator.add("//#\n2#3#4"));  // custom delimiter = #  output will be 2+3+4=9