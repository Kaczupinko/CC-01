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