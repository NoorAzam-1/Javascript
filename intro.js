console.log("hello ");


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
// TOPIC 4: OPERATORS
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
// TOPIC 5: CONDITIONAL STATEMENTS
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
const day = "tuesday1";
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
// TOPIC 6: LOOPS
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
// let fruits = ["Apple", "Banana", "Mango"];
let fruits = "Apple";
for (let fruit of fruits) {
    console.log("for-of - Fruit:", fruit);
}

// for...in Loop (keys of object)
let car = { brand: "Tata", model: "Nexon", year: 2024 };
for (let key in car) {
    console.log("for-in - " + key + ": " + car[key]);
}


// ============================================================
// TOPIC 7: FUNCTIONS
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
// TOPIC 8: ARRAYS
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
// TOPIC 9: OBJECTS
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
// TOPIC 10: ARRAY METHODS
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
let hasAdult = agesSome.filter(function (age) {
    return age >= 18;
});
console.log("some hasAdult (using filter for demo):", hasAdult.length > 0); // true

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
// TOPIC 11: OBJECT METHODS
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
// TOPIC 12: STRING METHODS
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
// TOPIC 13: DOM MANIPULATION
// ============================================================
// DOM = Document Object Model — JS ka "remote control" for HTML.
// NOTE: Ye sab HTML page ke andar hi run hote hain (browser console mein nahi).
// Isliye inko comment mein likha hai. Uncomment karke HTML file mein use karo.

// -------------------------------------------------------
// 1. SELECTING ELEMENTS
// -------------------------------------------------------
// let heading = document.getElementById("main-title");
// console.log("getElementById:", heading);

// let cards = document.getElementsByClassName("card");
// console.log("getElementsByClassName:", cards);

let paragraphs = document.querySelector("p");
console.log("getElementsByTagName:", paragraphs);

// let firstBtn = document.querySelector(".btn-primary");
// console.log("querySelector:", firstBtn);

// let navLink = document.querySelector("nav a");
// console.log("querySelector nav a:", navLink);

// let allItems = document.querySelectorAll(".list-item");
// console.log("querySelectorAll count:", allItems.length);

// -------------------------------------------------------
// 2. READING & CHANGING CONTENT
// -------------------------------------------------------
// let box = document.getElementById("box");

// Read content
// console.log("innerHTML read:", box.innerHTML);
// console.log("textContent read:", box.textContent);
// console.log("innerText read:", box.innerText);

// Change content
// box.innerHTML = "<strong>Hello</strong> World";   // Parses HTML tags
// box.textContent = "<strong>Hello</strong> World";  // Shows tags as plain text (safer)

// -------------------------------------------------------
// 3. CHANGING ATTRIBUTES
// -------------------------------------------------------
// let img = document.querySelector("img");
// let link = document.querySelector("a");

// getAttribute — Read
// console.log("getAttribute src:", img.getAttribute("src"));

// setAttribute — Set/Change
// img.setAttribute("src", "new-photo.jpg");
// link.setAttribute("href", "https://google.com");

// removeAttribute — Remove
// img.removeAttribute("alt");

// Direct property access (shorter)
// console.log("Direct img.src:", img.src);
// img.src = "another-photo.jpg";
// link.href = "https://yahoo.com";

// -------------------------------------------------------
// 4. CHANGING STYLES (camelCase for CSS properties)
// -------------------------------------------------------
// let card = document.querySelector(".card");

// card.style.backgroundColor = "#f7df1e";
// card.style.color = "#333";
// card.style.padding = "20px";
// card.style.borderRadius = "8px";
// card.style.fontSize = "18px";
// card.style.display = "none";     // Hide element
// card.style.display = "block";    // Show element again

// -------------------------------------------------------
// 5. WORKING WITH CLASSES (classList — recommended)
// -------------------------------------------------------
// let btn = document.getElementById("lll");
// console.log("data",btn)

// btn.classList.add("btn-primary", "rounded", "shadow");    // Add classes
// btn.classList.remove("rounded");                           // Remove class
// btn.classList.toggle("active");                            // Add if missing, remove if present
// console.log("contains active:", btn.classList.contains("active")); // true/false check
// btn.classList.replace("btn-primary", "btn-danger");        // Replace one class with another

// -------------------------------------------------------
// 6. CREATING & ADDING ELEMENTS
// -------------------------------------------------------
// Step 1: Create element
// let newParagraph = document.createElement("p");

// Step 2: Add content and attributes
// newParagraph.textContent = "This is a newly created paragraph.";
// newParagraph.id = "new-para";
// newParagraph.classList.add("text-muted");

// Step 3: Find parent and insert
// let container = document.getElementById("container");
// container.appendChild(newParagraph);    // Inserts as LAST child

// Insert BEFORE another element
// let referenceNode = document.querySelector(".existing-item");
// container.insertBefore(newParagraph, referenceNode);

// -------------------------------------------------------
// 7. REMOVING ELEMENTS
// -------------------------------------------------------
// Method 1: removeChild (traditional — needs parent)
// let parent = document.getElementById("list");
// let child = document.getElementById("item-3");
// parent.removeChild(child);

// Method 2: remove() (modern — cleaner, no parent needed)
// let oldElement = document.querySelector(".outdated");
// oldElement.remove();

// -------------------------------------------------------
// 8. TRAVERSING THE DOM (parent, children, siblings)
// -------------------------------------------------------
// let item = document.querySelector(".item");

// let parentEl = item.parentElement;             // Parent element
// let firstChildEl = item.firstElementChild;     // First child element
// let lastChildEl = item.lastElementChild;       // Last child element
// let allChildren = item.children;               // HTMLCollection of child elements
// let nextEl = item.nextElementSibling;          // Next sibling element
// let prevEl = item.previousElementSibling;      // Previous sibling element

// console.log("Parent:", parentEl);
// console.log("First child:", firstChildEl);
// console.log("Next sibling:", nextEl);

// Note: Use Element versions (not Node versions) to skip whitespace text nodes.
// item.firstChild      -> might return a whitespace text node (avoid)
// item.firstElementChild -> always returns first actual element (use this)

// -------------------------------------------------------
// 9. DATA ATTRIBUTES (dataset)
// -------------------------------------------------------
// HTML: <div id="user" data-userid="101" data-role="admin" data-full-name="Noor Ahmed"></div>
//
// let userDiv = document.getElementById("user");
//
// // Read data attributes (kebab-case in HTML becomes camelCase in JS)
// console.log("dataset userid:", userDiv.dataset.userid);      // "101"
// console.log("dataset role:", userDiv.dataset.role);          // "admin"
// console.log("dataset fullName:", userDiv.dataset.fullName);  // "Noor Ahmed"
//
// // Set new data attribute
// userDiv.dataset.status = "online";
// // HTML automatically becomes: data-status="online"
//
// // Update existing data attribute
// userDiv.dataset.role = "superadmin";
// // HTML becomes: data-role="superadmin"