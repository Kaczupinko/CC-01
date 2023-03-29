//const favoriteColor = 'yellow';
//const isMarried = false;
//const greeting = 'Hello';

/*function arithmeticAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return (sum / 3);
}
console.log(arithmeticAverage(1, 2, 3)); */

/* function quotient(num1, num2) {
    return (num1 / num2);
}
console.log(quotient(10, 2)); */

/*(function remainder(num1, num2) {
    return (num1 % num2);
}
console.log(remainder(10, 3)); */

function isTenorTwenty(num) {
    return (num === 10 || num === 20);
}
//console.log(isTenorTwenty(10));

function isOneGreaterThanOthers(num1, num2, num3) {
    return num1 > num2 + num3 || num2 > num1 + num3 || num3 > num1 + num2;
}
//console.log(isOneGreaterThanOthers(10, 11, 2));

function canMarry(age, gender, maritalStatus) {
    if ((gender === "female" && age >= 18 && maritalStatus === "single") ||
        (gender === "male" && age >= 21 && maritalStatus === "single")) {
        return true;
    } else {
        return false;
    }
}

//  console.log(canMarry(21, 'female', 'single')); 
/*
let x = 10;
x += 5;
let y = 20;
y -= 10;
let z = 15;
z *= 3;
let a = 25;
a /= 5;
let b = 10;
b %= 3;
let c = 15;
c **= 2;

function isPositiveOrNegative(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}
//console.log(isPositiveOrNegative(0));
//console.log(isPositiveOrNegative(1));
//console.log(isPositiveOrNegative(-1));

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
//console.log(isEvenOrOdd(23312));
//console.log(isEvenOrOdd(3221));   

function getSumWithoutNegative(arr) {
    let sum = 0;
    let hasNegative = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            hasNegative = true;
            break;
        } else {
            sum += arr[i];
        }
    }

    if (hasNegative) {
        return "There is a negative number in the array";
    } else {
        return sum;
    }
}
//console.log(getSumWithoutNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(getSumWithoutNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, -10]));

function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}
//console.log(checkTriangleType(1, 1, 1));
//console.log(checkTriangleType(1, 1, 2));
//console.log(checkTriangleType(1, 2, 3));

//hoisting - przsyniecie deklaracji na poczatek kodu 
x = 10;
console.log(x);
var x;

foo();               //hoisting jest to przesnoszenie deklarancji funkcji na poczatek kodu
function foo() {
    console.log('foo');
}   //hoisting function expression
*/
// poprawianie bledow 30 min 
/*
function calculateAverage(numbers) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) { //brak nawiasow klamrowych
        sum += numbers[i];
        count++;
    }

    return sum / count;
}

let numbers = [2, 4, 6, 8];
let result = calculateAverage(numbers);
console.log("The average is: " + result);
*/
/*
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }

  
let first = "John";
let last = "Doe";
let name = getFullName(firstName, lastName); 
console.log("The full name is: " + name);
*/
/*
function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 === 0) {
            sum = sum + number;
        }
    }

    return sum;
}

let numbers = [1, 2, 3, 4, 5, 6];
let result = sumEvenNumbers(numbers);
console.log("The sum of even numbers is: " + result);
*/
/*
function uniqueNumbers(numbers) {
    let unique = [];

    for (let i = 0; i < numbers.length; i++) {
        if (unique.indexOf(numbers[i]) === -1) {
            unique.push(numbers[i]);
        }
    }

    return unique;
}

let numbers = [1, 2, 3, 2, 4, 3, 5];
let result = uniqueNumbers(numbers);
console.log("Unique numbers are: " + result);
*/
/*
function calculateAverage(numbers) {
    let sum = 0;

    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        let average = sum / numbers.length;
        return average;
    } else {
        return 0;
    }
}

let numbers = [1, 2, 3, 4, 5];
let result = calculateAverage(numbers);
console.log("The average is: " + result);

*/
/*
function multiplyBy2(numbers) {
    let newArray = numbers.slice();

    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] * 2;
    }

    return newArray;
}

let numbers = [1, 2, 3, 4, 5];
let result = multiplyBy2(numbers);
console.log("The result is: " + result);
*/

function oddNumbers(input) {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 1) {
            newArray.push(input[i])
        }
    }

    return newArray;
};
console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const singleQuotes = 'single quotes\n and new line';
const doubleQuotes = "double quotes\n and new line";
const backticks = `backticks 
and new 
line`;
console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);
