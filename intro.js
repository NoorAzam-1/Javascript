console.log("Welcome to JavaScript Practice!");


// ============================================================
// TOPIC 1: INTRODUCTION TO JS
// ============================================================
// JavaScript is a High-level, Dynamically-typed, and Interpreted language.
// - High Level: Easy to read/write, memory managed automatically.
// - Dynamically-typed: Types are figured out automatically at runtime.
// - Interpreted: Executed line-by-line by the browser engine.

console.log("Hello, World!"); // Our very first JS code
console.log("1 + 1 =", 1 + 1); // Basic math


// ============================================================
// TOPIC 2: VARIABLES (var, let, const)
// ============================================================

// var - Function scoped, can be re-declared and updated
var x = 10;
var x = 20; // Re-declared — no error
console.log("var x:", x); // 20

// let - Block scoped, can be updated but NOT re-declared in same scope
let score = 90;
score = 95; // Updated — allowed
// let score = 100; // Error: Cannot re-declare
console.log("let score:", score); // 95

// const - Block scoped, cannot be updated or re-declared
const PI = 3.14159;
// PI = 3; // Error: Assignment to constant variable
console.log("const PI:", PI); // 3.14159

// Practice: Variable naming rules
let myUserName = "Noor"; // camelCase is the convention
let $price = 99;         // $ and _ are allowed at the start
let _private = "hidden"; // _ is allowed at the start
console.log("Naming rules - myUserName:", myUserName, "| $price:", $price, "| _private:", _private);


// ============================================================
// TOPIC 3: DATA TYPES
// ============================================================

// String
let name = "Noor";
let city = "Delhi";
console.log("String name:", name);
console.log("String city:", city);

// Number
let age = 25;
let price = 99.99;
console.log("Number age:", age);
console.log("Number price:", price);

// Boolean
let isJsFun = true;
let isGraduated = false;
console.log("Boolean isJsFun:", isJsFun);
console.log("Boolean isGraduated:", isGraduated);

// Undefined
let userData;
console.log("Undefined userData:", userData); // undefined

// Null
let emptyValue = null;
console.log("Null emptyValue:", emptyValue); // null

// Object (Non-Primitive)
let student = { firstName: "Noor", age: 22, isPassed: true };
console.log("Object student:", student);


// ============================================================
// TOPIC 4: TYPE CONVERSION (Coercion)
// ============================================================

// Implicit Conversion (Automatic)
console.log("Implicit '5' + 2:", "5" + 2);     // "52" (String wins in +)
console.log("Implicit '5' - 2:", "5" - 2);     // 3 (Minus forces Number)
console.log("Implicit '5' * '2':", "5" * "2"); // 10 (Multiplication forces Number)
console.log("Implicit true + 1:", true + 1);   // 2 (true becomes 1)

// Explicit Conversion to String
let num = 100;
console.log("String(100):", String(num));     // "100"
console.log("String(true):", String(true));   // "true"
console.log("(250).toString():", (250).toString()); // "250"

// Explicit Conversion to Number
console.log("Number('42'):", Number("42"));     // 42
console.log("Number('3.14'):", Number("3.14")); // 3.14
console.log("Number('Hello'):", Number("Hello")); // NaN
console.log("parseInt('42px'):", parseInt("42px")); // 42
console.log("parseFloat('3.14 inches'):", parseFloat("3.14 inches")); // 3.14

// Explicit Conversion to Boolean
console.log("Boolean(0):", Boolean(0));         // false
console.log("Boolean(1):", Boolean(1));         // true
console.log("Boolean(''):", Boolean(""));       // false
console.log("Boolean('Hello'):", Boolean("Hello")); // true
console.log("Boolean(null):", Boolean(null));   // false

// Type Checking (typeof)
console.log("typeof 'Hello':", typeof "Hello");   // "string"
console.log("typeof 42:", typeof 42);             // "number"
console.log("typeof true:", typeof true);         // "boolean"
console.log("typeof {name:'Noor'}:", typeof { name: "Noor" }); // "object"
console.log("typeof [1,2,3]:", typeof [1, 2, 3]); // "object" (Arrays are objects!)
console.log("typeof null:", typeof null);          // "object" (Historical bug)


// ============================================================
// TOPIC 5: TRUTHY & FALSY VALUES
// ============================================================
// JS mein har value ko boolean mein convert karke dekha ja sakta hai.
// Sirf 5 values Falsy hoti hain, baaki sab Truthy hoti hain.

// The 5 Falsy Values
console.log("Falsy 0:", Boolean(0));         // false
console.log("Falsy '':", Boolean(""));       // false (empty string)
console.log("Falsy null:", Boolean(null));   // false
console.log("Falsy undefined:", Boolean(undefined)); // false
console.log("Falsy NaN:", Boolean(NaN));     // false

// Truthy Values (Common Traps)
console.log("Truthy 1:", Boolean(1));               // true
console.log("Truthy '0':", Boolean("0"));           // true (non-empty string)
console.log("Truthy 'Hello':", Boolean("Hello"));   // true
console.log("Truthy []:", Boolean([]));             // true (Empty array is TRUTHY!)
console.log("Truthy {}:", Boolean({}));             // true (Empty object is TRUTHY!)

// Practice: Using truthy/falsy for defaults
let username = "";
let displayName = username || "Guest";
console.log("Default value using ||:", displayName); // "Guest"


// ============================================================
// TOPIC 6: OPERATORS
// ============================================================

// Arithmetic Operators
let sum = 10 + 5;       // Addition -> 15
let diff = 10 - 5;      // Subtraction -> 5
let product = 10 * 5;   // Multiplication -> 50
let quotient = 10 / 5;  // Division -> 2
let remainder = 10 % 3; // Modulus -> 1
console.log("Arithmetic - sum:", sum, "diff:", diff, "product:", product, "quotient:", quotient, "remainder:", remainder);

// Assignment Operators
let a = 10;   // Simple assignment
a += 5;       // a = a + 5 -> 15
a -= 3;       // a = a - 3 -> 12
console.log("Assignment a:", a);

// Comparison Operators
console.log("5 == '5':", 5 == "5");   // true (value only)
console.log("5 === '5':", 5 === "5"); // false (value + type)
console.log("10 > 5:", 10 > 5);       // true
console.log("10 != 5:", 10 != 5);     // true

// Logical Operators
console.log("5 > 3 && 10 > 20:", 5 > 3 && 10 > 20); // false (AND)
console.log("5 > 3 || 10 > 20:", 5 > 3 || 10 > 20); // true (OR)
console.log("!(5 > 3):", !(5 > 3));                   // false (NOT)

// Ternary Operator
let userAge = 18;
let status = (userAge >= 18) ? "Adult" : "Minor";
console.log("Ternary status:", status); // Adult


// ============================================================
// TOPIC 7: CONDITIONAL STATEMENTS
// ============================================================

// if Statement
let voteAge = 20;
if (voteAge >= 18) {
    console.log("if - You can vote.");
}

// if...else Statement
let isRaining = false;
if (isRaining) {
    console.log("if-else - Take an umbrella.");
} else {
    console.log("if-else - Enjoy the sunny day!");
}

// Else-if Ladder
let marks = 75;
if (marks >= 90) {
    console.log("else-if - Grade: A+");
} else if (marks >= 75) {
    console.log("else-if - Grade: A");
} else {
    console.log("else-if - Grade: F");
}

// Switch Statement
const day = "tuesday";
switch (day) {
    case "monday":
        console.log("switch - monday");
        break;
    case "tuesday":
        console.log("switch - tuesday");
        break;
    case "thursday":
        console.log("switch - thursday");
        break;
    default:
        console.log("switch - none of above");
        break;
}


// ============================================================
// TOPIC 8: LOOPS
// ============================================================

// for Loop
for (let i = 1; i <= 5; i++) {
    console.log("for loop - Number:", i);
}

// while Loop
let count = 1;
while (count <= 3) {
    console.log("while loop - Count is:", count);
    count++;
}

// do...while Loop
let doX = 10;
do {
    console.log("do-while - Runs at least once!");
    doX++;
} while (doX < 5);

// for...of Loop (values of iterable)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("for-of - Fruit:", fruit);
}

// for...in Loop (keys of object)
let car = { brand: "Tata", model: "Nexon", year: 2024 };
for (let key in car) {
    console.log("for-in - " + key + ": " + car[key]);
}


// ============================================================
// TOPIC 9: FUNCTIONS
// ============================================================

// 1. Function Declaration (Hoisted)
function sayHello() {
    console.log("Function - Hello, Welcome to JavaScript!");
}
sayHello();

// 2. Function with Parameter
function greetUser(name) {
    console.log("Function with param - Hello, " + name + "! How are you?");
}
greetUser("Noor");

// 3. Function with Multiple Parameters
function addNumbers(num1, num2) {
    console.log("Function multi-param - Sum is:", num1 + num2);
}
addNumbers(10, 20);

// 4. Function with Return Value
function multiply(a, b) {
    return a * b;
}
let mulResult = multiply(5, 4);
console.log("Function return - Multiplication Result:", mulResult);

// 5. Function Expression (Not Hoisted)
const sayBye = function () {
    console.log("Function expression - Goodbye! See you later.");
};
sayBye();

// 6. Arrow Function (ES6)
const square = (num) => {
    return num * num;
};
console.log("Arrow function full - Square of 6:", square(6));

const doubleIt = (n) => n * 2;
console.log("Arrow function short - Double of 7:", doubleIt(7));


// ============================================================
// TOPIC 10: ARRAYS
// ============================================================

// 1. Creating an Array
let colors = ["Red", "Green", "Blue"];
let mixed = ["Apple", 25, true, null];
console.log("Array create - colors:", colors);
console.log("Array create - mixed:", mixed);

// 2. Accessing Elements by Index
let fruitsArr = ["Mango", "Banana", "Grapes"];
console.log("Array access [0]:", fruitsArr[0]); // Mango
console.log("Array access [2]:", fruitsArr[2]); // Grapes

// 3. Modifying Elements
let carsArr = ["Honda", "Toyota", "Ford"];
carsArr[1] = "BMW";
console.log("Array modify - carsArr:", carsArr);

// 4. Array Length Property
let numbersArr = [10, 20, 30, 40, 50];
console.log("Array length:", numbersArr.length); // 5

// 5. Adding Elements (push, unshift)
let animalsArr = ["Dog", "Cat"];
animalsArr.push("Lion");
console.log("Array push:", animalsArr);
animalsArr.unshift("Bird");
console.log("Array unshift:", animalsArr);

// 6. Removing Elements (pop, shift)
let itemsArr = ["Pen", "Book", "Eraser", "Scale"];
itemsArr.pop();
console.log("Array pop:", itemsArr);
itemsArr.shift();
console.log("Array shift:", itemsArr);


// ============================================================
// TOPIC 11: OBJECTS
// ============================================================

// 1. Creating an Object (Object Literal)
let studentObj = {
    name: "Noor",
    age: 22,
    course: "Web Development",
    isGraduated: false
};
console.log("Object create:", studentObj);

// 2. Accessing Properties (Dot Notation)
let carObj = { brand: "Tata", model: "Nexon" };
console.log("Object dot - brand:", carObj.brand);
console.log("Object dot - model:", carObj.model);

// 3. Accessing Properties (Bracket Notation)
let userObj = { firstName: "Rahul", "last name": "Sharma" };
console.log("Object bracket - firstName:", userObj["firstName"]);
console.log("Object bracket - last name:", userObj["last name"]);

// 4. Modifying Properties
let phoneObj = { brand: "Samsung", price: 25000 };
phoneObj.price = 22000;
console.log("Object modify - price:", phoneObj.price);

// 5. Adding New Properties
let laptopObj = { brand: "Dell", ram: "8GB" };
laptopObj.storage = "512GB";
laptopObj.color = "Black";
console.log("Object add prop:", laptopObj);

// 6. Deleting Properties
let employeeObj = { name: "Priya", dept: "HR", salary: 40000 };
delete employeeObj.salary;
console.log("Object delete:", employeeObj);

// 7. Object with Method (Function inside Object)
let personObj = {
    name: "Amit",
    age: 30,
    introduce: function () {
        console.log("Object method - Hi, I am " + this.name + " and I am " + this.age + " years old.");
    }
};
personObj.introduce();


// ============================================================
// TOPIC 12: ARRAY METHODS
// ============================================================

// 1. indexOf()
let fruitsIdx = ["Apple", "Mango", "Banana", "Mango"];
console.log("indexOf Mango:", fruitsIdx.indexOf("Mango")); // 1
console.log("indexOf Grapes:", fruitsIdx.indexOf("Grapes")); // -1

// 2. includes()
let colorsInc = ["Red", "Green", "Blue"];
console.log("includes Green:", colorsInc.includes("Green")); // true
console.log("includes Yellow:", colorsInc.includes("Yellow")); // false

// 3. join()
let wordsJoin = ["Hello", "World", "JavaScript"];
console.log("join default:", wordsJoin.join()); // Hello,World,JavaScript
console.log("join dash:", wordsJoin.join(" - ")); // Hello - World - JavaScript
console.log("join space:", wordsJoin.join(" ")); // Hello World JavaScript

// 4. slice() - Does NOT modify original
let numsSlice = [10, 20, 30, 40, 50];
let sliced = numsSlice.slice(1, 4);
console.log("slice result:", sliced); // [20, 30, 40]
console.log("slice original:", numsSlice); // [10, 20, 30, 40, 50] unchanged

// 5. splice() - MODIFIES original
let arrSplice = ["A", "B", "C", "D", "E"];
let removed = arrSplice.splice(1, 2);
console.log("splice removed:", removed); // ["B", "C"]
console.log("splice original:", arrSplice); // ["A", "D", "E"]

// 6. concat() - Does NOT modify originals
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log("concat merged:", merged); // [1, 2, 3, 4, 5, 6]
console.log("concat arr1:", arr1); // [1, 2, 3] unchanged

// 7. reverse() - MODIFIES original
let lettersRev = ["A", "B", "C", "D"];
lettersRev.reverse();
console.log("reverse:", lettersRev); // ["D", "C", "B", "A"]

// 8. sort() - MODIFIES original
let namesSort = ["Zara", "Noor", "Amit"];
namesSort.sort();
console.log("sort strings:", namesSort); // ["Amit", "Noor", "Zara"]

let numSort = [40, 100, 1, 5, 25];
numSort.sort(function (a, b) { return a - b; });
console.log("sort numbers:", numSort); // [1, 5, 25, 40, 100]

// 9. push() & pop()
let stackArr = [10, 20];
let newLen = stackArr.push(30, 40);
console.log("push new length:", newLen); // 4
let lastPopped = stackArr.pop();
console.log("pop returned:", lastPopped); // 40
console.log("push/pop array:", stackArr); // [10, 20, 30]

// 10. shift() & unshift()
let queueArr = ["B", "C", "D"];
queueArr.unshift("A");
let firstShifted = queueArr.shift();
console.log("shift returned:", firstShifted); // A
console.log("shift/unshift array:", queueArr); // ["B", "C", "D"]

// 11. map() - Creates NEW array, transforms each element
let pricesMap = [100, 200, 300];
let discounted = pricesMap.map(function (price) {
    return price - 20;
});
console.log("map result:", discounted); // [80, 180, 280]
console.log("map original:", pricesMap); // [100, 200, 300] unchanged

// 12. filter() - Creates NEW array with elements that pass test
let agesFilter = [12, 18, 25, 8, 30, 16];
let adults = agesFilter.filter(function (age) {
    return age >= 18;
});
console.log("filter result:", adults); // [18, 25, 30]
console.log("filter original:", agesFilter); // [12, 18, 25, 8, 30, 16] unchanged

// 13. reduce() - Reduces array to a SINGLE value
let numsReduce = [1, 2, 3, 4, 5];
let total = numsReduce.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("reduce total:", total); // 15

// 14. find() - Returns FIRST element that matches
let usersFind = [
    { id: 1, name: "Noor" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
];
let found = usersFind.find(function (user) {
    return user.id === 2;
});
console.log("find result:", found); // { id: 2, name: "Rahul" }

// 15. findIndex() - Returns INDEX of first match
let scoresFindIdx = [45, 80, 55, 90, 60];
let idx = scoresFindIdx.findIndex(function (score) {
    return score > 85;
});
console.log("findIndex:", idx); // 3

// 16. forEach() - Executes function for each element, returns undefined
let citiesForEach = ["Delhi", "Mumbai", "Chennai"];
citiesForEach.forEach(function (city, index) {
    console.log("forEach - " + index + ": " + city);
});

// 17. every() - True if ALL elements pass
let marksEvery = [80, 85, 90, 78, 88];
let allPassed = marksEvery.every(function (mark) {
    return mark >= 75;
});
console.log("every allPassed:", allPassed); // true

// 18. some() - True if AT LEAST ONE passes
let agesSome = [12, 15, 22, 10];
let hasAdult = agesSome.some(function (age) {
    return age >= 18;
});
console.log("some hasAdult:", hasAdult); // true (because 22 is present)

// 19. flat() - Flattens nested arrays
let nestedFlat = [1, [2, 3], [4, [5, 6]]];
console.log("flat depth 1:", nestedFlat.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("flat Infinity:", nestedFlat.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// 20. Array.isArray() - Static method to check if value is array
let checkArr = [1, 2, 3];
let checkObj = { name: "Noor" };
console.log("isArray [1,2,3]:", Array.isArray(checkArr)); // true
console.log("isArray {name:'Noor'}:", Array.isArray(checkObj)); // false


// ============================================================
// TOPIC 13: OBJECT METHODS
// ============================================================

// 1. Object.keys() - Returns array of keys
let studentKeys = { name: "Noor", age: 22, city: "Delhi" };
let keys = Object.keys(studentKeys);
console.log("Object.keys:", keys); // ["name", "age", "city"]

// 2. Object.values() - Returns array of values
let carVals = { brand: "Tata", model: "Nexon", year: 2024 };
let vals = Object.values(carVals);
console.log("Object.values:", vals); // ["Tata", "Nexon", 2024]

// 3. Object.entries() - Returns array of [key, value] pairs
let productEntries = { name: "Laptop", price: 50000, inStock: true };
let entries = Object.entries(productEntries);
console.log("Object.entries:", entries);

// 4. Object.hasOwnProperty() - Checks if property exists
let userHasOwn = { name: "Amit", email: "amit@mail.com" };
console.log("hasOwnProperty name:", userHasOwn.hasOwnProperty("name")); // true
console.log("hasOwnProperty phone:", userHasOwn.hasOwnProperty("phone")); // false

// 5. Object.assign() - Copies properties from source to target
let targetAssign = { a: 1, b: 2 };
let sourceAssign = { b: 3, c: 4 };
let resultAssign = Object.assign(targetAssign, sourceAssign);
console.log("Object.assign result:", resultAssign); // { a: 1, b: 3, c: 4 }
console.log("Object.assign target:", targetAssign); // { a: 1, b: 3, c: 4 } (modified)

// 6. Object.freeze() - Makes object completely immutable
let configFreeze = { theme: "dark", fontSize: 14 };
Object.freeze(configFreeze);
configFreeze.theme = "light"; // Silently fails
configFreeze.newProp = "test"; // Silently fails
console.log("Object.freeze:", configFreeze); // { theme: "dark", fontSize: 14 }

// 7. Object.seal() - No add/delete, but can modify existing
let dataSeal = { name: "Rahul", score: 85 };
Object.seal(dataSeal);
dataSeal.score = 90; // Allowed
dataSeal.city = "Mumbai"; // Silently fails
delete dataSeal.name; // Silently fails
console.log("Object.seal:", dataSeal); // { name: "Rahul", score: 90 }

// 8. Object.keys().length - Count number of properties
let employeeLen = { id: 1, name: "Priya", dept: "HR", salary: 40000 };
let propCount = Object.keys(employeeLen).length;
console.log("Object property count:", propCount); // 4


// ============================================================
// TOPIC 14: STRING METHODS
// ============================================================
// Note: Strings are IMMUTABLE — no method changes the original string.
// They always return a NEW string.

// 1. length (Property) - Total characters including spaces
let strLen = "Hello World";
console.log("length:", strLen.length); // 11

// 2. toUpperCase() - Converts to uppercase
let nameUpper = "noor";
console.log("toUpperCase:", nameUpper.toUpperCase()); // "NOOR"

// 3. toLowerCase() - Converts to lowercase
let cityLower = "DELHI";
console.log("toLowerCase:", cityLower.toLowerCase()); // "delhi"

// 4. trim() - Removes whitespace from BOTH ends
let messyTrim = "   Hello   World   ";
console.log("trim:", messyTrim.trim()); // "Hello   World"

// 5. trimStart() - Removes whitespace from BEGINNING only
let textTrimStart = "   Hello World";
console.log("trimStart:", textTrimStart.trimStart()); // "Hello World"

// 6. trimEnd() - Removes whitespace from END only
let textTrimEnd = "Hello World   ";
console.log("trimEnd:", textTrimEnd.trimEnd()); // "Hello World"

// 7. includes() - Checks if substring exists (case-sensitive)
let sentenceInc = "I love JavaScript";
console.log("includes 'love':", sentenceInc.includes("love")); // true
console.log("includes 'Love':", sentenceInc.includes("Love")); // false (case-sensitive)

// 8. indexOf() - First index of substring, -1 if not found
let msgIdx = "Hello World Hello";
console.log("indexOf 'Hello':", msgIdx.indexOf("Hello")); // 0
console.log("indexOf 'World':", msgIdx.indexOf("World")); // 6
console.log("indexOf 'Bye':", msgIdx.indexOf("Bye")); // -1

// 9. lastIndexOf() - Last occurrence index
let msgLastIdx = "Hello World Hello";
console.log("lastIndexOf 'Hello':", msgLastIdx.lastIndexOf("Hello")); // 12

// 10. startsWith() - Checks if string starts with substring
let urlStart = "https://google.com";
console.log("startsWith 'https':", urlStart.startsWith("https")); // true
console.log("startsWith 'http':", urlStart.startsWith("http")); // false

// 11. endsWith() - Checks if string ends with substring
let fileEnd = "photo.jpg";
console.log("endsWith '.jpg':", fileEnd.endsWith(".jpg")); // true
console.log("endsWith '.png':", fileEnd.endsWith(".png")); // false

// 12. charAt() - Character at specific index
let wordCharAt = "JavaScript";
console.log("charAt(0):", wordCharAt.charAt(0)); // "J"
console.log("charAt(4):", wordCharAt.charAt(4)); // "S"

// 13. charCodeAt() - Unicode/ASCII number at index
console.log("charCodeAt 'A':", "A".charCodeAt(0)); // 65
console.log("charCodeAt 'a':", "a".charCodeAt(0)); // 97

// 14. slice(start, end) - Extracts portion, end is EXCLUDED, supports negative
let strSlice = "Hello World";
console.log("slice(0,5):", strSlice.slice(0, 5)); // "Hello"
console.log("slice(6):", strSlice.slice(6)); // "World"
console.log("slice(-5):", strSlice.slice(-5)); // "World" (last 5 chars)

// 15. substring(start, end) - Same as slice but NO negative indices
let strSubstr = "Hello World";
console.log("substring(0,5):", strSubstr.substring(0, 5)); // "Hello"
console.log("substring(6,11):", strSubstr.substring(6, 11)); // "World"
console.log("substring(-3):", strSubstr.substring(-3)); // "Hello World" (negative treated as 0)

// 16. replace() - Replaces FIRST occurrence only (case-sensitive)
let textReplace = "I love cats. Cats are cute.";
console.log("replace:", textReplace.replace("cats", "dogs")); // "I love dogs. Cats are cute."

// 17. replaceAll() - Replaces ALL occurrences (ES2021)
let textReplaceAll = "I love cats. Cats are cute.";
console.log("replaceAll:", textReplaceAll.replaceAll("cats", "dogs").replaceAll("Cats", "Dogs")); // "I love dogs. Dogs are cute."

// 18. split() - Splits string into array by separator
let csvSplit = "Red,Green,Blue,Yellow";
console.log("split ',':", csvSplit.split(",")); // ["Red", "Green", "Blue", "Yellow"]

let sentenceSplit = "Hello World JavaScript";
console.log("split ' ':", sentenceSplit.split(" ")); // ["Hello", "World", "JavaScript"]

let wordSplit = "JavaScript";
console.log("split '':", wordSplit.split("")); // ["J","a","v","a","S","c","r","i","p","t"]

// 19. repeat() - Repeats string N times
let dashRepeat = "-";
console.log("repeat 10:", dashRepeat.repeat(10)); // "----------"
let haRepeat = "Ha";
console.log("repeat 3:", haRepeat.repeat(3)); // "HaHaHa"

// 20. concat() - Joins strings, same as + operator
let firstConcat = "Hello";
let secondConcat = "World";
console.log("concat:", firstConcat.concat(" ", secondConcat)); // "Hello World"
console.log("concat multi:", firstConcat.concat(" ", secondConcat, "!")); // "Hello World!"

// 21. padStart() - Pads from START to target length
let numPad = "5";
console.log("padStart(3,'0'):", numPad.padStart(3, "0")); // "005"
let pinPad = "123";
console.log("padStart(6,'*'):", pinPad.padStart(6, "*")); // "***123"

// 22. padEnd() - Pads from END to target length
let namePad = "Noor";
console.log("padEnd(10,'.'):", namePad.padEnd(10, ".")); // "Noor......"
let pricePad = "99";
console.log("padEnd(6,' '):", pricePad.padEnd(6, " ")); // "99    "

// 23. match() - Searches using RegExp, returns array or null
let textMatch = "Call me at 9876543210 or 9123456789";
let numbersMatch = textMatch.match(/\d{10}/g);
console.log("match 10-digit numbers:", numbersMatch); // ["9876543210", "9123456789"]


// ============================================================
// TOPIC 15: NUMBER METHODS
// ============================================================

// 1. toString() - Number to string
let numAge = 25;
console.log("toString:", numAge.toString()); // "25"
console.log("typeof after toString:", typeof (50).toString()); // "string"

// 2. toFixed() - Fixed decimal places (returns STRING)
let numPrice = 19.995;
console.log("toFixed(2):", numPrice.toFixed(2)); // "20.00"
console.log("toFixed(1):", numPrice.toFixed(1)); // "20.0"
console.log("toFixed(0):", numPrice.toFixed(0)); // "20"

// 3. toPrecision() - Total digits including decimal part
let numPrecise = 123.456;
console.log("toPrecision(4):", numPrecise.toPrecision(4)); // "123.5"
console.log("toPrecision(6):", numPrecise.toPrecision(6)); // "123.456"

// 4. parseInt() - String to whole number
console.log("parseInt('42px'):", parseInt("42px")); // 42
console.log("parseInt('10 students'):", parseInt("10 students")); // 10
console.log("parseInt('abc'):", parseInt("abc")); // NaN
console.log("parseInt('3.99'):", parseInt("3.99")); // 3

// 5. parseFloat() - String to decimal number
console.log("parseFloat('3.99'):", parseFloat("3.99")); // 3.99
console.log("parseFloat('10.5 kg'):", parseFloat("10.5 kg")); // 10.5
console.log("parseFloat('abc'):", parseFloat("abc")); // NaN

// 6. Number.isInteger() - Checks if whole number
console.log("isInteger(10):", Number.isInteger(10)); // true
console.log("isInteger(10.5):", Number.isInteger(10.5)); // false
console.log("isInteger('10'):", Number.isInteger("10")); // false

// 7. NaN (Not a Number)
let badResult = "hello" * 2;
console.log("'hello' * 2 =", badResult); // NaN
console.log("Number.isNaN(badResult):", Number.isNaN(badResult)); // true
console.log("Number.isNaN(42):", Number.isNaN(42)); // false


// ============================================================
// TOPIC 16: MATH METHODS
// ============================================================

// 1. Rounding Methods
console.log("Math.round(4.6):", Math.round(4.6)); // 5 (Nearest integer)
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5 (Rounds UP)
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4 (Rounds DOWN)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4 (Removes decimal)

// 2. Random Numbers
console.log("Math.random():", Math.random()); // Random decimal 0 to 0.999...
// Formula for random integer between min and max: Math.floor(Math.random() * (max - min + 1)) + min
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

// 3. Max, Min, Pow, Sqrt
console.log("Math.max(10,20,5):", Math.max(10, 20, 5)); // 20
console.log("Math.min(10,20,5):", Math.min(10, 20, 5)); // 5
console.log("Math.pow(2,3):", Math.pow(2, 3));           // 8 (2^3)
console.log("Math.sqrt(16):", Math.sqrt(16));             // 4
console.log("Math.abs(-5):", Math.abs(-5));               // 5 (Positive)
console.log("Math.PI:", Math.PI);                          // 3.141592653589793


// ============================================================
// TOPIC 17: DATE & TIME
// ============================================================

// 1. Creating a Date
let nowDate = new Date();              // Current date & time
let specificDate = new Date("2025-01-15"); // From a string
let manualDate = new Date(2025, 0, 15);    // Year, Month (0-11!), Day
console.log("Date now:", nowDate);
console.log("Date specific:", specificDate);
console.log("Date manual:", manualDate);

// 2. Getting Date Parts
let todayDate = new Date();
console.log("getFullYear():", todayDate.getFullYear()); // e.g., 2025
console.log("getMonth():", todayDate.getMonth());       // 0-11 (January is 0!)
console.log("getDate():", todayDate.getDate());          // Day of month (1-31)
console.log("getDay():", todayDate.getDay());            // Day of week (0=Sunday)
console.log("getHours():", todayDate.getHours());        // 0-23
console.log("getMinutes():", todayDate.getMinutes());    // 0-59
console.log("getSeconds():", todayDate.getSeconds());    // 0-59

// 3. Timestamps
console.log("getTime():", nowDate.getTime());   // milliseconds since 1970
console.log("Date.now():", Date.now());          // Same, shorter

// 4. Formatting Dates
console.log("toDateString():", todayDate.toDateString());
console.log("toLocaleDateString():", todayDate.toLocaleDateString());
console.log("toLocaleTimeString():", todayDate.toLocaleTimeString());
console.log("toLocaleString():", todayDate.toLocaleString());


// ============================================================
// TOPIC 18: DOM MANIPULATION (REAL HTML DATA EXAMPLES)
// ============================================================
// NOTE: DOM sirf HTML file ke saath run hota hai (browser me).
// Hum apni index.html ke REAL elements ko target kar rahe hain.

if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        // -------------------------------------------------------
        // 1. SELECTING REAL ELEMENTS (From your index.html)
        // -------------------------------------------------------
        let mainHeading = document.querySelector(".container h1"); // Selects "JavaScript Reference Guide"
        let firstH2 = document.querySelector("h2");                // Selects "1. Introduction to JS"
        let firstH3 = document.querySelector("h3");                // Selects "High Level"
        let firstCodeBlock = document.querySelector("code");      // Selects very first code block
        let highlightSpan = document.querySelector(".highlight");  // Selects first red text ("Example:")

        console.log("DOM Real H1 text:", mainHeading.innerText);
        console.log("DOM Real H2 text:", firstH2.innerText);
        console.log("DOM Real H3 text:", firstH3.innerText);

        // -------------------------------------------------------
        // 2. READING & CHANGING REAL CONTENT
        // -------------------------------------------------------
        console.log("DOM Real Code Block HTML:", firstCodeBlock.innerHTML);

        // Changing real element safely (then reverting so notes aren't spoiled)
        let originalH2Text = firstH2.textContent;
        firstH2.textContent = "1. MODIFIED BY JS!";
        console.log("DOM After H2 Change:", firstH2.textContent);
        firstH2.textContent = originalH2Text;

        // -------------------------------------------------------
        // 3. CHANGING REAL STYLES
        // -------------------------------------------------------
        let originalBg = mainHeading.style.backgroundColor;
        mainHeading.style.backgroundColor = "blue";
        console.log("DOM Style changed to blue");
        mainHeading.style.backgroundColor = originalBg;

        // -------------------------------------------------------
        // 4. WORKING WITH REAL CLASSES
        // -------------------------------------------------------
        console.log("DOM Class before toggle:", highlightSpan.classList.contains("temp-highlight")); // false
        highlightSpan.classList.add("temp-highlight");
        console.log("DOM Class after add:", highlightSpan.classList.contains("temp-highlight")); // true
        highlightSpan.classList.remove("temp-highlight");
        console.log("DOM Class after remove:", highlightSpan.classList.contains("temp-highlight")); // false

        // -------------------------------------------------------
        // 5. CREATING & ADDING REAL ELEMENTS
        // -------------------------------------------------------
        let newElement = document.createElement("p");
        newElement.textContent = "-> This paragraph was injected by JavaScript dynamically!";
        newElement.style.color = "green";
        newElement.style.fontWeight = "bold";

        let containerDiv = document.querySelector(".container");
        containerDiv.appendChild(newElement);
        console.log("DOM New element added at the end of container.");

        setTimeout(function () {
            newElement.remove();
            console.log("DOM Injected element removed after 3 seconds.");
        }, 3000);

        // -------------------------------------------------------
        // 6. DATA ATTRIBUTES (Adding & Reading from real H3)
        // -------------------------------------------------------
        firstH3.setAttribute("data-topic", "high-level-language");
        console.log("DOM Data Attr Added:", firstH3.getAttribute("data-topic"));
        console.log("DOM Dataset via JS:", firstH3.dataset.topic);
        firstH3.removeAttribute("data-topic");

    });
}


// ============================================================
// TOPIC 19: EVENTS & EVENT LISTENERS
// ============================================================

if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        // 1. addEventListener - Attach a click handler to real h1
        let mainHeading = document.querySelector(".container h1");
        mainHeading.addEventListener("click", function () {
            alert("You clicked the main 'JavaScript Reference Guide' heading!");
        });
        console.log("Event: Click listener added to H1.");

        // 2. The 'event' object - target tells what was clicked
        document.querySelectorAll("h2").forEach(function (heading) {
            heading.addEventListener("mouseenter", function (event) {
                console.log("Event mouseenter on:", event.target.tagName, "-", event.target.textContent);
            });
        });

    });
}


// ============================================================
// TOPIC 20: ERROR HANDLING (try...catch...finally)
// ============================================================

// 1. Basic try...catch
try {
    let badJson = "{ name: 'Noor', }"; // Invalid JSON (keys must be in double quotes)
    JSON.parse(badJson); // This will throw an error
} catch (error) {
    console.log("Error Caught - Name:", error.name);     // "SyntaxError"
    console.log("Error Caught - Message:", error.message); // Explains the issue
}

// 2. try...catch...finally
try {
    console.log("Trying to execute code...");
    // let x = y + 5; // If you uncomment this, catch will run
} catch (error) {
    console.log("This runs ONLY if an error occurs.");
} finally {
    console.log("Finally block: This ALWAYS runs, error or no error.");
}

// 3. Custom throw
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative!");
    }
    return "Valid Age: " + age;
}

try {
    console.log(checkAge(-5));
} catch (e) {
    console.log("Custom Throw Caught:", e.message); // "Age cannot be negative!"
}


// ============================================================
// TOPIC 21: ES6+ MODERN FEATURES
// ============================================================

// 1. Template Literals
let es6Name = "Noor";
let es6Age = 22;
console.log(`ES6 Template: Hello ${es6Name}, you are ${es6Age} years old.`);

// 2. Destructuring Objects
const { name: userName, age: userAgeDestructure } = { name: "Amit", age: 25, city: "Delhi" };
console.log("ES6 Destructured Name:", userName);

// 3. Destructuring Arrays
const [firstColor, secondColor] = ["Red", "Green", "Blue"];
console.log("ES6 Destructured Array:", secondColor); // "Green"

// 4. Spread Operator (Cloning/Merging)
const originalArr = [1, 2, 3];
const clonedArr = [...originalArr]; // True clone
clonedArr.push(4);
console.log("ES6 Spread Original:", originalArr); // [1, 2, 3] (unchanged)
console.log("ES6 Spread Cloned:", clonedArr);     // [1, 2, 3, 4]

// 5. Rest Operator (Packing arguments)
function sumAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log("ES6 Rest Operator Sum:", sumAll(10, 20, 30, 40)); // 100

// 6. Short Circuit Evaluation
let loggedInUser = null;
let displayName2 = loggedInUser || "Guest User";
console.log("ES6 Short Circuit:", displayName2); // "Guest User"


// ============================================================
// TOPIC 22: CLASSES & OOP
// ============================================================

// 1. Creating a Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s1 = new Student("Noor", 22);
let s2 = new Student("Rahul", 25);
console.log("Class s1.name:", s1.name); // "Noor"
console.log("Class s2.age:", s2.age);   // 25

// 2. Class Methods
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {
        console.log("Class method:", this.brand + " " + this.model + " is starting!");
    }
}

let myCar = new Car("Tata", "Nexon");
myCar.start(); // "Tata Nexon is starting!"

// 3. Inheritance (extends)
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("Inheritance:", this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls parent constructor
        this.breed = breed;
    }
    bark() {
        console.log("Inheritance:", this.name + " barks!");
    }
}

let dog = new Dog("Tommy", "Labrador");
dog.speak(); // Inherited method
dog.bark();  // Own method

// 4. Getters & Setters
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + " " + this.last;
    }
    set fullName(value) {
        [this.first, this.last] = value.split(" ");
    }
}

let p = new Person("Amit", "Sharma");
console.log("Getter fullName:", p.fullName); // "Amit Sharma"
p.fullName = "Rahul Verma";
console.log("Setter first:", p.first);        // "Rahul"

// 5. Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log("Static method:", MathUtils.add(5, 3)); // 8


// ============================================================
// TOPIC 23: JSON
// ============================================================

// 1. JSON.parse() - JSON string to JS object
let jsonString = '{"name": "Noor", "age": 22}';
let userFromJson = JSON.parse(jsonString);
console.log("JSON.parse name:", userFromJson.name); // "Noor"
console.log("JSON.parse age:", userFromJson.age);   // 22

// 2. JSON.stringify() - JS object to JSON string
let userToJson = { name: "Noor", age: 22, city: "Delhi" };
let jsonStringified = JSON.stringify(userToJson);
console.log("JSON.stringify:", jsonStringified); // {"name":"Noor","age":22,"city":"Delhi"}
console.log("JSON.stringify type:", typeof jsonStringified); // "string"

// 3. Working with Arrays of Objects
let studentsJson = [
    { name: "Noor", grade: "A" },
    { name: "Rahul", grade: "B" }
];
let jsonArr = JSON.stringify(studentsJson);
let backArr = JSON.parse(jsonArr);
console.log("JSON array back[0].name:", backArr[0].name); // "Noor"


// ============================================================
// TOPIC 24: WEB STORAGE (LocalStorage & SessionStorage)
// ============================================================
// NOTE: Ye bhi browser me hi chalta hai. Agar Node me run karein
// toh localStorage defined nahi hoga, isliye guard laga diya hai.

if (typeof localStorage !== "undefined") {
    // 1. Setting & Getting Data
    localStorage.setItem("username", "Noor");
    localStorage.setItem("theme", "dark");
    console.log("Storage getItem username:", localStorage.getItem("username")); // "Noor"
    console.log("Storage getItem theme:", localStorage.getItem("theme"));       // "dark"

    // 2. Storing Objects (JSON)
    let storageUser = { name: "Noor", age: 22 };
    localStorage.setItem("user", JSON.stringify(storageUser));
    let savedStorageUser = JSON.parse(localStorage.getItem("user"));
    console.log("Storage saved user name:", savedStorageUser.name); // "Noor"

    // 3. Removing & Clearing Data
    localStorage.removeItem("theme");
    console.log("Storage after removeItem theme:", localStorage.getItem("theme")); // null
    localStorage.clear();
    console.log("Storage length after clear:", localStorage.length); // 0

    // 4. Session Storage
    sessionStorage.setItem("sessionId", "abc123");
    console.log("SessionStorage getItem:", sessionStorage.getItem("sessionId")); // "abc123"
}


// ============================================================
// TOPIC 25: TIMERS (setTimeout & setInterval)
// ============================================================

// 1. setTimeout() - Run once after a delay (2000 ms = 2 seconds)
setTimeout(function () {
    console.log("Timer setTimeout: This runs after 2 seconds.");
}, 2000);

// 2. setInterval() - Run repeatedly until stopped
let timerCounter = 0;
let timerInterval = setInterval(function () {
    timerCounter++;
    console.log("Timer setInterval Tick:", timerCounter);
    if (timerCounter === 3) {
        clearInterval(timerInterval); // Stop after 3 ticks
        console.log("Timer interval cleared.");
    }
}, 1000);

// 3. clearTimeout() - Cancel a pending timeout
let cancelMe = setTimeout(function () {
    console.log("This will NOT run.");
}, 5000);
clearTimeout(cancelMe);
console.log("Timer clearTimeout: timeout cancelled.");


// ============================================================
// TOPIC 26: PROMISES & ASYNC / AWAIT
// ============================================================

// 1. Creating a Promise
function fetchApiData() {
    return new Promise(function (resolve, reject) {
        let isSuccess = true; // Change to false to test reject

        setTimeout(function () {
            if (isSuccess) {
                resolve({ id: 101, message: "Data fetched successfully!" });
            } else {
                reject("Network Error: Failed to connect.");
            }
        }, 2000); // 2 second delay
    });
}

// 2. Consuming with .then() / .catch()
console.log("Promise: Starting fetch...");
fetchApiData()
    .then(function (data) {
        console.log("Promise .then Success:", data.message);
    })
    .catch(function (error) {
        console.log("Promise .catch Error:", error);
    });

// 3. Consuming with Async / Await (Cleaner syntax)
async function getDataAsync() {
    try {
        console.log("Async/Await: Waiting for data...");
        let response = await fetchApiData(); // Code pauses here until promise resolves
        console.log("Async/Await Success:", response.message);
    } catch (error) {
        console.log("Async/Await Error:", error);
    }
}

getDataAsync();


// ============================================================
// TOPIC 27: FETCH API (Working with Servers)
// ============================================================
// NOTE: Ye internet require karta hai. Agar offline ho toh error catch ho jayega.

if (typeof fetch !== "undefined") {
    // 1. Basic GET Request
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Fetch User Name:", data.name);
        })
        .catch(function (error) {
            console.log("Fetch Error:", error.message);
        });

    // 2. Fetch with Async/Await
    async function getUserFetch() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            let user = await response.json();
            console.log("Fetch Async User Email:", user.email);
        } catch (error) {
            console.log("Fetch Async Error:", error.message);
        }
    }
    getUserFetch();
}
