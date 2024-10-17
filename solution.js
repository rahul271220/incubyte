class StringCalculator {
    add(numbers) {
        // edge case scenrio
        if (numbers == '') { 
            return 0;
        }
        // Split the input by commas to handle multiple numbers
        // let nums = numbers.split(",");
        let current = '';
        let arr = [];
        for (let i =0; i< numbers.length; i++) {
            let c = numbers[i];
            if (c == '\n' || c == ',') {
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
         console.log(arr);
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
  console.log(calculator.add('1\n2,3'));  //output will 1+2+3 = 6
  console.log(calculator.add('1\n,22,3'));  //output will 1+22+3 = 26