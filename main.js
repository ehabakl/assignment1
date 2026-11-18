// 1.Part 1: Coding Questions 
//============================

// 1.Convert the string "123" to a number and add 7.
// str= "123"
// strToNumber = Number(str) 
// strToNumberWith7Addition = Number(str) + 7
// console.log(strToNumberWith7Addition)


//2.Check if the given variable is falsy and return "Invalid" if it is. 
// valueGiven = 0
// if(Boolean(valueGiven) == false){
// console.log("Value is falsy")

// }else if(Boolean(valueGiven) == true){
//     console.log("Value is truthy")
// }

//3.Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.
// for(let i = 0 ; i <=10 ; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i)
// }


// 4.Create an array of numbers and return only the even numbers using filter method.
// arr = [1, 2, 3, 4, 5]
// newArr = arr.filter((num) => num % 2 == 0)
// console.log(newArr)


// 5.Use the spread operator to merge two arrays, then return the merged array. 
//  arr1 = [1, 2, 3]
//  arr2 = [4, 5, 6]
//  mergedArr = [...arr1, ...arr2]
//  console.log(mergedArr)


//6. 
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;

//     case 2:
//         console.log("Monday");
//         break;

//     case 3:
//         console.log("Tuesday");
//         break;

//     case 4:
//         console.log("Wednesday");
//         break;

//     case 5:
//         console.log("Thursday");
//         break;

//     case 6:
//         console.log("Friday");
//         break;

//     case 7:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalid day number");
// }

//7. Create an array of strings and return their lengths using map method
// arr= ["A", "BC" , "DEF"]
// newArr = arr.map((value) => value.length)
// console.log(newArr)

//8.Write a function that checks if a number is divisible by 3 and 5. 
// function isDivisibleBy3And5(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isDivisibleBy3And5(15)); // true
// console.log(isDivisibleBy3And5(10)); // false


//9.Write a function using arrow syntax to return the square of a number 
// function getsquare(num) {
//     return num * num;
// }                                                       


//10.Write a function that destructures an object to extract values and returns a formatted string.
// function getStudentInfo(student) {
//     const { name, age } = student;

//     return `Student ${name} is ${age} years old.`;
// }
// const student = {
//     name: "Ehab",
//     age: 32,
// };
// console.log(getStudentInfo(student));

//11.Write a function that accepts multiple parameters (two or more) and returns their sum.
// function calculatesum(num1 , ...restParam){
//     let sum = num1;
//     for(let i = 0; i < restParam.length; i++){
//         sum += restParam[i];
//     }
//     return sum;
// }

//12.Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// function resolveAfter3Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Success');
//         }, 3000);
//     });
// }

//13.Write a function to find the largest number in an array.
// function findLargestNumber(arr) {
//     let largestNum = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > largestNum) {
//             largestNum = arr[i];
//         }
//     }
//     return largestNum;
// }
// arr = [10, 2, 3, 8 , 6 , 20, 4]
// console.log(findLargestNumber(arr));
 


//14.Write a function that takes an object and returns an array containing only its keys.
// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }
// obbj = { name: "John", age: 30, city: "New York" };
// console.log(getObjectKeys(obbj)); // Output: ["name", "age", "city"]  

//15. Write a function that splits a string into an array of words based on spaces. 
// function splitString(str) {
//     return str.split(" ");
// }


// B. Part 2: Essay Questions
//===========================
//1. What is the difference between forEach and for...of? When would you use each? 
// foreach is an array method where each iteration happens almost in prarell and it does not support break or continue statements or even await. 
// It is used when you want to perform an action on each element of an array without needing to exit the loop early.
// for...of is a loop that iterates over iterable objects like arrays, strings, and maps. It allows the use of break and continue statements and also await.

//2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. 
//hositing is that JavaScript's default behavior of moving declarations to the top of the current scope 
//example : 
// console.log(myVar); // Output: undefined
//var myVar = 5;
//varibles and function declared by var can be accessed before declaration but will return undefined,
//while let and const will throw a ReferenceError if accessed before declaration. which is called TDZ
//example:
// console.log(myVar2); // Output: 5
// let myVar2 = 5;

//3. What are the main differences between == and ===?
//both are comparison operators in JavaScript, but they differ in how they compare values 
// == performs type coercion, converting both operands to the same type before comparison
// === does not perform type coercion and compares both value and type

//4. Explain how try-catch works and why it is important in async operations. 
//try-catch is a mechanism in JavaScript for handling exceptions and errors that may occur during the execution of code.
// It allows you to write code that may throw an error in the try block, and if an error occurs, the catch block is executed to handle the error gracefully.

//5. What’s the difference between type conversion and coercion? Provide examples of each.
// Type conversion is the explicit process of converting a value from one type to another, usually done by the programmer.
// Example: Number("5") converts the string "5" to the number 5.
// Coercion is the implicit conversion of a value from one type to another, usually done by JavaScript itself.
// Example: "5" + 2 results in "52" because JavaScript coerces the number 2 to a string before concatenating.




