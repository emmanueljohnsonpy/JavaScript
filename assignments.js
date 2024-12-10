// 1


/* let userInput = prompt("Please enter a character:");
console.log("You entered: " + userInput); */


// 2


/* let num1 = parseInt(prompt("Please enter the first number (integer):"));
let num2 = parseFloat(prompt("Please enter the second number (float):"));
let sum = num1 + num2;
console.log("The sum of the two numbers is: " + sum); */


// 3


/* let principal = parseInt(prompt("Enter the principal amount (P):"));
let rate = parseFloat(prompt("Enter the interest rate (R):"));  
let years = parseFloat(prompt("Enter the number of years (n):"));  
let simpleInterest = (principal * rate * years) / 100;
console.log("The Simple Interest (SI) is: " + simpleInterest); */


// 4


/* let mark = parseFloat(prompt("Enter your mark:"));  
if (mark >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
} */


// 5


/* let marks = parseFloat(prompt("Enter your total mark percentage:"));
let grade;

if (marks > 90) {
  grade = 'A';
} else if (marks >= 80) {
  grade = 'B';
} else if (marks >= 70) {
  grade = 'C';
} else if (marks >= 60) {
  grade = 'D';
} else if (marks >= 50) {
  grade = 'E';
} else {
  grade = 'Failed';
}

console.log("Grade: " + grade); */


// 6


/* let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));
let day;

switch (dayNumber) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid Entry";
}

console.log("Day: " + day); */


// 7


/* let number = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
  console.log(i + " x " + number + " = " + (i * number));
} */


// 8


/* let limit = parseInt(prompt("Enter a limit:"));
let sum = 0;

for (let i = 1; i <= limit; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log("Sum of odd numbers = " + sum); */


// 9


/* for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line.trim());
  } */


// 10


/* let size = parseInt(prompt("Enter the size of arrays:"));
let array1 = [];
let array2 = [];

// Input Array 1
console.log("Enter the values of Array 1:");
for (let i = 0; i < size; i++) {
  array1.push(parseInt(prompt()));
}

// Input Array 2
console.log("Enter the values of Array 2:");
for (let i = 0; i < size; i++) {
  array2.push(parseInt(prompt()));
}

// Swapping arrays
let temp = [...array1];
array1 = [...array2];
array2 = temp;

console.log("Arrays after swapping:");
console.log("Array1:", array1);
console.log("Array2:", array2); */


/* let size = parseInt(prompt("Enter the size of the array:"));
let array = [];

console.log("Enter the values of array:");
for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt()));
}

let evenCount = array.filter(num => num % 2 === 0).length;
console.log("Number of even numbers in the given array is " + evenCount);
 */

/* let size = parseInt(prompt("Enter the size of the array:"));
let array = [];

console.log("Enter the values of array:");
for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt()));
}

array.sort((a, b) => b - a);
console.log("Sorted array:", array); */

/* let str = prompt("Enter a string:");
let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
  console.log("Entered string is a palindrome");
} else {
  console.log("Entered string is not a palindrome");
} */

/* let size = parseInt(prompt("Enter the size of arrays:"));
let array1 = [];
let array2 = [];

// Input Array 1
console.log("Enter the values of array 1:");
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(parseInt(prompt()));
  }
  array1.push(row);
}

// Input Array 2
console.log("Enter the values of array 2:");
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(parseInt(prompt()));
  }
  array2.push(row);
}

// Adding arrays
let sumArray = [];
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(array1[i][j] + array2[i][j]);
  }
  sumArray.push(row);
}

console.log("Sum of 2 arrays is:");
console.log(sumArray);
 */

/* function getArray() {
    let array = [];
    let size = parseInt(prompt("Enter the size of the array:"));
    console.log("Enter the values of array:");
    for (let i = 0; i < size; i++) {
      array.push(parseInt(prompt()));
    }
    return array;
  }
  
  function displayArray(array) {
    console.log("Array values:", array);
  }
  
  function main() {
    let array = getArray();
    displayArray(array);
  }
  
  main(); */
  

  /* let num = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Entered number is a Prime number");
} else {
  console.log("Entered number is not a Prime number");
} */


 /*  class Calculator {
    addition(a, b) {
      return a + b;
    }
    
    subtraction(a, b) {
      return a - b;
    }
    
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Cannot divide by 0";
      }
    }
  }
  
  function main() {
    let calc = new Calculator();
    let choice = parseInt(prompt("Choose operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
  
    switch (choice) {
      case 1:
        console.log("Result: " + calc.addition(num1, num2));
        break;
      case 2:
        console.log("Result: " + calc.subtraction(num1, num2));
        break;
      case 3:
        console.log("Result: " + calc.multiplication(num1, num2));
        break;
      case 4:
        console.log("Result: " + calc.division(num1, num2));
        break;
      default:
        console.log("Invalid choice");
    }
  }
  
  main();
   */
/* 
  function calculateGrade() {
    let writtenTest = parseFloat(prompt("Enter the marks for written test:"));
    let labExams = parseFloat(prompt("Enter the marks for lab exams:"));
    let assignments = parseFloat(prompt("Enter the marks for assignments:"));
  
    let grade = (writtenTest * 0.7) + (labExams * 0.2) + (assignments * 0.1);
    console.log(`Grade of the student is: ${grade}`);
  }
  
  calculateGrade(); */
  

  /* function calculateTax() {
    let income = parseFloat(prompt("Enter the annual income:"));
  
    let tax = 0;
  
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = income * 0.05;
    } else if (income <= 1000000) {
      tax = income * 0.20;
    } else if (income <= 5000000) {
      tax = income * 0.30;
    }
  
    console.log(`Income tax amount = ${tax.toFixed(2)}`);
  }
  
  calculateTax();
   */

/*   function printPattern() {
    let count = 1;
    for (let i = 1; i <= 4; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += count + "\t";
        count++;
      }
      console.log(row);
    }
  }
  
  printPattern();
   */

 /*  function multiplyAdjacent() {
    let size = parseInt(prompt("Enter the array limit:"));
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(parseInt(prompt(`Enter value for index ${i}:`)));
    }
  
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i] * arr[i + 1]);
    }
  
    console.log("Resulting array: " + result.join("\t"));
  }
  
  multiplyAdjacent();
   */

  /* function getArray(rows, cols) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
      arr.push([]);
      for (let j = 0; j < cols; j++) {
        arr[i].push(parseInt(prompt(`Enter value for arr[${i}][${j}]:`)));
      }
    }
    return arr;
  }
  
  function addArrays(arr1, arr2, rows, cols) {
    let result = [];
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        result[i].push(arr1[i][j] + arr2[i][j]);
      }
    }
    return result;
  }
  
  function displayArray(arr) {
    for (let row of arr) {
      console.log(row.join("\t"));
    }
  }
  
  function main() {
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));
  
    console.log("Enter values for array 1:");
    let arr1 = getArray(rows, cols);
  
    console.log("Enter values for array 2:");
    let arr2 = getArray(rows, cols);
  
    let result = addArrays(arr1, arr2, rows, cols);
  
    console.log("Sum of arrays:");
    displayArray(result);
  }
  
  main();
   */

  /* class Array2D {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.arr = [];
    }
  
    getArray() {
      for (let i = 0; i < this.rows; i++) {
        this.arr.push([]);
        for (let j = 0; j < this.cols; j++) {
          this.arr[i].push(parseInt(prompt(`Enter value for arr[${i}][${j}]:`)));
        }
      }
    }
  
    displayArray() {
      for (let row of this.arr) {
        console.log(row.join("\t"));
      }
    }
  }
  
  function main() {
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));
  
    let array = new Array2D(rows, cols);
    array.getArray();
    console.log("Array elements are:");
    array.displayArray();
  }
  
  main();
   */

  /* class Area {
    circle(radius) {
      return Math.PI * radius * radius;
    }
  
    square(side) {
      return side * side;
    }
  
    rectangle(length, breadth) {
      return length * breadth;
    }
  
    triangle(base, height) {
      return 0.5 * base * height;
    }
  }
  
  class MyClass extends Area {
    main() {
      let choice = parseInt(prompt("Enter your choice\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle"));
  
      switch (choice) {
        case 1:
          let radius = parseFloat(prompt("Enter the radius:"));
          console.log(`Area of the circle is: ${this.circle(radius).toFixed(2)}`);
          break;
        case 2:
          let side = parseFloat(prompt("Enter the side:"));
          console.log(`Area of the square is: ${this.square(side).toFixed(2)}`);
          break;
        case 3:
          let length = parseFloat(prompt("Enter the length:"));
          let breadth = parseFloat(prompt("Enter the breadth:"));
          console.log(`Area of the rectangle is: ${this.rectangle(length, breadth).toFixed(2)}`);
          break;
        case 4:
          let base = parseFloat(prompt("Enter the base:"));
          let height = parseFloat(prompt("Enter the height:"));
          console.log(`Area of the triangle is: ${this.triangle(base, height).toFixed(2)}`);
          break;
        default:
          console.log("Invalid choice!");
      }
    }
  }
  
  let myClass = new MyClass();
  myClass.main();
   */

  /* var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for (let book of library) {
    if (book.readingStatus) {
        console.log(`Already read '${book.title}' by ${book.author}.`);
    } else {
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
    }
}
 */

/* try {
    let my_string = "1234";  // Can replace with other values
    let reversed = my_string.split().reverse().join('');
    console.log(`Reversed string is: ${reversed}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  } finally {
    console.log(`Type of my_string is: ${typeof my_string}`);
  } */
  

 /*    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
      }
      
      let myCar = new Car('Tesla', 400, 250);
      console.log(myCar);
       */

/* function myFilter(myArray, callback) {
let sum = 0;
for (let num of myArray) {
    sum += num;
}
return callback(sum) ? sum : 0;
}

let result = myFilter([1, 2, 3, 4, 5], (sum) => sum % 2 === 0);
console.log(result);  // Output 15 */
