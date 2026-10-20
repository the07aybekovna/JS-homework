// #1
// console.log("Hello, JavaScript!");

// #2
// let name = "Durdana";
// let age = 16;
// let city = "Nukus";

// console.log(name, age, city);

// #3
// let a = 5;
// let b = 10;
// [a, b] = [b, a];

// console.log(a, b);

// #4
// let x = 10;
// let y = 3;
// console.log(x + y);

// #5
// let x = 10;
// let y = 3;
// console.log(x - y);

// #6
// let x = 10;
// let y = 3;
// console.log(x * y);

// #7
// let x = 10;
// let y = 3;
// console.log(x / y);

// #8
// let x = 10;
// let y = 3;
// console.log(x % y);

// #9
// let number = 8;
// console.log(number % 2 === 0 ? "Even" : "Odd");

// #10
// let number = -5;

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// #11
// let a = 15;
// let b = 20;
// console.log(a > b ? a : b);

// #12
// let a = 10;
// let b = 25;
// let c = 15;
// console.log(Math.max(a, b, c));

// #13
// let age = 16;
// console.log(age >= 18 ? "Adult" : "Minor");

// #14
// let number = 15;
// console.log(number % 3 === 0 && number % 5 === 0);

// #15
// let month = 4;

// switch (month) {
//     case 1: console.log("January"); break;
//     case 2: console.log("February"); break;
//     case 3: console.log("March"); break;
//     case 4: console.log("April"); break;
//     case 5: console.log("May"); break;
//     case 6: console.log("June"); break;
//     case 7: console.log("July"); break;
//     case 8: console.log("August"); break;
//     case 9: console.log("September"); break;
//     case 10: console.log("October"); break;
//     case 11: console.log("November"); break;
//     case 12: console.log("December"); break;
//     default: console.log("Invalid month");
// }

// #16
// let day = 3;

// switch (day) {
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid day");
// }

// #17
// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not a leap year");
// }

// #18
// let a = 10;
// let b = 5;
// let operator = "+";

// switch (operator) {
//     case "+": console.log(a + b); break;
//     case "-": console.log(a - b); break;
//     case "*": console.log(a * b); break;
//     case "/":
//         console.log(b !== 0 ? a / b : "Cannot divide by zero");
//         break;
//     default: console.log("Invalid operator");
// }

// #19
// for (let i = 10; i <= 100; i++) {
//     console.log(i);
// }

// #20
// let score = 85;

// if (score < 0 || score > 100) {
//     console.log("Invalid score");
// } else if (score >= 90) {
//     console.log("A");
// } else if (score >= 70) {
//     console.log("B");
// } else if (score >= 50) {
//     console.log("C");
// } else {
//     console.log("F");
// }

// #21
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// #22
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// #23
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// #24
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

// #25
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log(sum);

// #26
// let sum = 0;

// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }

// console.log(sum);

// #27
// let number = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// #28
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// #29
// let number = 5;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }

// console.log(factorial);

// #30
// let number = 12345;
// console.log(Math.abs(number).toString().length);

// #31
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let number of numbers) {
//     console.log(number);
// }

// #32
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let number of numbers) {
//     sum += number;
// }

// console.log(sum);

// #33
// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let number of numbers) {
//     sum += number;
// }

// console.log(sum / numbers.length);

// #34
// let numbers = [12, 45, 7, 89, 23];
// let max = numbers[0];

// for (let number of numbers) {
//     if (number > max) {
//         max = number;
//     }
// }

// console.log(max);

// #35
// let numbers = [12, 45, 7, 89, 23];
// let min = numbers[0];

// for (let number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }

// console.log(min);

// #36
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let count = 0;

// for (let number of numbers) {
//     if (number % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);

// #37
// let numbers = [-5, 3, -2, 8, 0, 7];
// let positive = numbers.filter(number => number > 0);

// console.log(positive);

// #38
// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
// }

// console.log(reversed);

// #39
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let unique = [...new Set(numbers)];

// console.log(unique);

// #40
// let numbers = [10, 20, 5, 30, 20, 10];
// let unique = [...new Set(numbers)].sort((a, b) => b - a);

// console.log(unique.length >= 2 ? unique[1] : null);

// #41
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 10));

// #42
// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(8));

// #43
// function findMax(numbers) {
//     let max = numbers[0];

//     for (let number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }

//     return max;
// }

// console.log(findMax([10, 25, 7, 40, 15]));

// #44
// function reverseString(text) {
//     let result = "";

//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }

//     return result;
// }

// console.log(reverseString("hello"));

// #45
// function isPalindrome(text) {
//     text = text.toLowerCase();
//     return text === text.split("").reverse().join("");
// }

// console.log(isPalindrome("level"));

// #46
// function countVowels(text) {
//     let count = 0;
//     let vowels = "aeiou";

//     for (let char of text.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World"));

// #47
// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord("JavaScript is a powerful language"));

// #48
// let user = {
//     name: "Ali",
//     age: 20,
//     email: "ali@example.com",

//     showInfo() {
//         console.log(`${this.name}, ${this.age}, ${this.email}`);
//     }
// };

// user.showInfo();

// #49
// let products = [
//     { name: "Book", price: 10 },
//     { name: "Laptop", price: 800 },
//     { name: "Pen", price: 2 },
//     { name: "Phone", price: 500 }
// ];

// let maxPrice = 100;
// let result = products.filter(product => product.price < maxPrice);

// console.log(result);

// #50
// let users = [
//     { name: "Ali", age: 20, salary: 3000 },
//     { name: "Vali", age: 16, salary: 1000 },
//     { name: "Sara", age: 25, salary: 4000 }
// ];

// let adults = users.filter(user => user.age >= 18);
// let names = adults.map(user => user.name);
// let totalSalary = adults.reduce((sum, user) => sum + user.salary, 0);

// console.log(adults);
// console.log(names);
// console.log(totalSalary);