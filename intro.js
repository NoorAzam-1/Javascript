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