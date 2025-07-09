// JS variable name : variable name shold be of letters, number, underscore. First letter can only be letter or underscore. Case sensitive.  reserved name can't be variable.
// var let const

// var courseName = "Javascript";
// var courseId = 1;
// function getCourseDetails() {
//   console.log(courseId + " - " + courseName);
// }

// getCourseDetails();

/* var num = 3 / 0;
console.log(typeof num, num);
 */
/*
JS Data type : 2 primitive , non- primitive ( Objects)
primitive: number, string, boolean, undefined, null, bigInt, symbol(uniqueness)
let pass = null;

let depositAmt ;
console.log(depositAmt);  // undefined

*/

// object - Non primitive data type
let userDetails = {
  name: "Aman",
  age: 23,
  add: "Phulwari",
  pin: 801505,
};

// console.log(userDetails.name);

console.log("-------------------------------------------------");
/*
JS Type conversion
Implicit : done by JS engine during execution time
Explicit : done by developer

Explicit type conversion:
value to string:
let num2= 54;
let str = num2.toString();  // String(num2)
console.log(typeof num2, typeof str)

value to number: 
Number(value)

string to number
str ="Hello";
console.log(Number(str) , typeof Number(str))  // NaN, number
 
boolean to number
let bool = false;
console.log(Number(bool) , typeof Number(bool))  // 0, number

string to boolean
let str = null;
console.log(Boolean(str), typeof Boolean(str))   // if value then true else false

Implicit:
var num = 12+3 + 'Hello'  // 15Hello
*/

// JS operators

/* let num1 = 10;

let num2 = num1++;
console.log(num1, num2)
// Terneray operator
console.log( 9 < 6 ? "Yes":"No")
 */
// Conditional statements

/* let age = 18;

if (age > 18)
  console.log("Adult")
else
console.log("Child")
 */

// Loop for
// for ... in -Iteratingf over properties of object
// for ... of - Iterating over arrays or strings

/* let person ={
name: "Samar",
age: 23,
state: "Bihar",
pincode: 801505
};

for( let prop in person){
  console.log(prop, ": ", person[prop]);
}

let array = ["Mon","Tue","Thr","Fri"];
for (let  day of array) {
  console.log(day);
  
}
 */

// ***********************************************************************Arrays
let nums = [23, 45, 56, 67, 89];
// push()    unshift()    pop()    shift()

/* for (const element of nums) {
  console.log(element);
} */

//nums.push(12, 34,23)

//nums.pop();

//nums.unshift(10, 20)
//nums.shift();

// concat method, spread operator for concatinating two arrays
let names = ["Mani", "sunny"];
let concArrs = nums.concat(names, names);

let concArrs2 = [...names, ...nums]; //[ 'Mani', 'sunny', 23, 45, 56, 67, 89 ]

// reverse(), sort() updates the original array which will be returned

//nums.reverse();
//nums.sort()
//let arr = new Array(12,"Heelo")

// indexOf()
//console.log(nums.indexOf(34))   // -1 not found or retruns index of first occurrence of the element

// includes() returns boolean

/* let isPresent = nums.includes(45)
let isFound = names.includes("mani")
console.log(isFound, typeof isFound);  
 */

// splic2(starting point, count): removes specified number of elemnts from arrays starting from mentioned index in orig array. returns copy of sub set of removed elements
// syntax arrys.splic(start, end, elementToAdd (optional))

/* let marks = [22, 12,34, 65,34,67]
let splicedArr = marks.splice(1,3, 100,200)
console.log(marks)      //[ 22, 34, 67 ]
console.log(splicedArr)      //[ 12, 34, 65 ]
  */

// Arrays.slice(start index, end index)  : gives copy of subset of the array

/* let sliceArr = nums.slice(2,5)  //[ 56, 67, 89 ]
console.log(sliceArr) 
*/

// ****************************************************************************String
// using string as primitive data type

/* et str1 ="Courses";
let str2 = "Departments";
console.log("typeof string: ",typeof str1)

console .log(str1 + " " + str2);  // Courses Departments :using concat operator
console.log(`${str1} ${str2}`);   // Courses Departments: using backtick operator

// escape characters using \ backward slash
console.log("It' my business")
console.log('It\' my business')

// using string object
let str3 = new String("Courses");
console.log("typeof string: ",typeof str3) 

*/

// objects compare, result will be always false.

// String Methods:

/* 
str.toLowerCase()
str.toUpperCase()
str.includes()   : returns boolean
str.charAt(index) : returns character
str.indexOf("C")
str.slice(start index , end index)  : copy string and perform slice operation. end index is exclusive

 */

/* 
let str4 = "This is javascript learning in vs Code"
console.log(str4.includes("Code"))  // true

let str5 = str4.trim();
console.log("str4: ",str4, "\nstr5: ",str5);
let strArray = str4.split(" ")
console.log(strArray)
*/

// ************************************************************************Object

/*

// 1. creating object using object literal
let paxAddress={
  city: "patna",
  state: "bihar",
  pin: 801505,
  isPermAddress: true
}
let paxFlight = ["AY12", "AY543", "AY141"];

let paxDetails ={
  name: "Samar",
  pnr: "ERDHHBD",
  mob: 82626272627,
  address: paxAddress,
  flightInfo : paxFlight,
  age: 30,
  courses: {
    py: "python",
    js: "javascript"
  }
};


How to access js object properties: using
Dot operator  // console.log(paxDetails.address.isPermAddress)
using bracket notation    // used when any key defined with space eg. "flight info"
console.log(paxDetails["address"]["state"])


// update JS object
paxDetails.age = 35;

// to add new property in JS obj
paxDetails.emailAdd = "abc.gmail.com";
console.log(paxDetails.emailAdd)

// removing JS obj property
delete paxDetails.age

console.log(paxDetails)

// optional chaining for not existing value ?
console.log(paxDetails.age?.value);  // undefined

//Iteration over JS object
for(let key in paxAddress){
 //console.log(key,":",paxAddress[key])

 console.log(`${key}: ${paxAddress[key]}`)  // Using template literal : mordern way
}

// creationg JS obj using constructor new keyword
let pnrs = new Object();
pnrs.pnrNo = "EBDHJJK";
pnrs.pnr_id = "237543333";
pnrs.crationDate= "25-OCT-2025";
console.log(`pnr number: ${pnrs.pnrNo}`)


*/

//******************************************************************* function
/* let num = 5;

function square(a){
  return a*a
}
console.log(square(num));
 

// function expressions

1. Named function
let funInvoke = function myfunc() {
  console.log(`Named function`);
};
funInvoke();

console.log(typeof funInvoke); // function

2. Anonymous function
let anonyFunc = function () {
  console.log(`Anonymous function`);
};
funInvoke();

3. Arrow function  Mordern approach
let arrowFunc = () => {
  console.log(`Arrow function`);
};

4 IIFE Immediately Invoked function expression
(function () {
  console.log(`IIFE Immediately Invoked function expression`);
})();

5. Nested function

function outer() {
  console.log("outer function");
  function inner() {
    console.log(`inner function`);
  }
  inner()
}

outer();

 */

// *********************************************************************************** Coding Examples

// 1. Swaping to numbers
/* 
swapFunc(10, 20);

function swapFunc(first, sec) {
  console.log(`before swaping- first:${first} second: ${sec}`);
  let temp = sec;
  sec = first;
  first = temp;
  console.log(`After swaping- first:${first} second: ${sec}`);
}

// 2. count vowels

function countVowel(str) {
  let vowel = ["A", "I", "O", "U", "E", "a", "i", "o", "u", "e"];
  let count = 0;
  for (const char of str) {
    if (vowel.includes(char)) count++;
  }
  return count
}
let totalVowel = countVowel("Hello")
console.log(totalVowel)

 */

// Important Array methods

// Array.map : take a callback function and perform some operation on each element of orig arr. Returns new modified arr

/*
let numArr = [10, 20, 30, 40, 50];
let doubleArr = numArr.map((ele) => {
  return ele * 2;
});
console.log(`orignal arr: ${numArr} \nnew arr: ${doubleArr}`);

// array.filter : perform filter opertaion and return new array with elements true for the filter condition

let filtArr = numArr.filter((ele) => {
  return ele > 40;
});
console.log(`orignal arr: ${numArr} \nnew arr: ${filtArr}`);

// array.reduce : return reduced single value after performing operation of elements of array

let redVal = numArr.reduce((accumulator, curValue) => {
  console.log(accumulator, curValue);
  return accumulator + curValue / 2;
}, 0);
console.log(`reduced value: ${redVal}`);

// method chaining : ex- sum of elemnets greater than 30

let result = numArr
  .filter((e) => {
    return e > 30;
  })
  .reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
  }, 0);

console.log(`orignal arr: ${numArr} \nResult: ${result}`);

// Real world example for map, filter, reduce

let employees = [
  { id: 101, name: "Alice Johnson", dept: "HR", salary: 55000 },
  { id: 102, name: "Bob Smith", dept: "IT", salary: 75000 },
  { id: 103, name: "Charlie Brown", dept: "Finance", salary: 65000 },
  { id: 104, name: "David Wilson", dept: "Marketing", salary: 60000 },
  { id: 105, name: "Emma Davis", dept: "IT", salary: 80000 },
];

employees = employees.map((emp) => {
  emp.empCode = emp.id + "-" + emp.dept;
  return emp;
});

console.log(employees);

let empNames = employees
  .filter((emp) => {
    return emp.salary > 60000;
  })
  .map((emp) => {
    return emp.name;
  });
console.log(empNames);

// total sal by IT dep

let totalSalByIT = employees
  .filter((emp) => {
    return emp.dept == "IT";
  })
  .reduce((acc, cur) => {
    return acc + cur.salary;
  }, 0);

console.log(totalSalByIT);

*/

// Recursive function

/* function factorial(num) {
  if (num == 1) return 1;
  result = num * factorial(num - 1);

  return result;
}
console.log(`Factorial output: ${factorial(3)}`);
 */


// JS Date and time API

/* let specificDate = new Date(2025,2,20);  // Date from a string  output default in UTC format
console.log(specificDate);

let yearMonthDay = new Date(2025, 2, 27);  // Year, Month (0-based), Day
console.log(yearMonthDay.toUTCString()); 
*/

/* let specificDate = new Date("2025-02-24");
console.log(specificDate.toLocaleDateString());
*/

/* let specificDate = new Date("2025-02-24");
console.log(specificDate.getDate());
console.log(specificDate.getMilliseconds());
console.log(specificDate.getFullYear());


// performing date arithmetics
let date = new Date("2025-02-20")
date.setDate(date.getDate()+ 7)
date.setFullYear(date.getFullYear() + 2)
date.setMonth(date.getMonth()+1)
console.log(date)

let now = new Date();

console.log(now.toLocaleString("en-US", { timeZone: "America/New_York" })); */

/* // NUmber
let num = new Number(200)
console.log(num)

// Math
console.log(Math.round(2.34))  //2
console.log(Math.ceil(2.93))  //3
console.log(Math.floor(2.99)) //2

Math.random()
Math.floor(Math.random() *1000)
 */



// ********************************************************************************** JS DOM BOM Handling
/* 

Document node : global obj and child of window obj

html child of document obj

Accessibility to DOM elements/nodes

Within document obj:

getElementById()   return 

getElementByClassName()

getElementByTagName()

querySelector()  // return first child node

querySelectorALL() // retrun nodelist


 */

