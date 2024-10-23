javascript
// Define a variable “myGreeting” and place a string containing a generic greeting inside it.
let myGreeting = "Hello, welcome to JavaScript operations!";
// Output the contents of “myGreeting” using console.log(...).
console.log(myGreeting);

// Define a constant variable “pi” and place a number containing the value for Pi inside of it.
const pi = 3.14159;
// Attempt to re-assign “pi” to something else - what happens? Why?
// pi = 3.14; // Uncommenting this line will cause an error because 'pi' is a constant and cannot be reassigned.

// Define a new variable “myNumber” and place a number of your choice inside it.
let myNumber = 7;
// Call the “min” function inside of the “Math” object on both “myNumber” and “pi” - what is the result? Why?
let minNumber = Math.min(myNumber, pi);
console.log("The minimum value between myNumber and pi is:", minNumber);

