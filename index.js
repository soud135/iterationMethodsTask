//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];


/*****************************************************************
Part 1: Filtering

Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

// Q1
const numbersGreaterThanEqual25 = numbers.filter(number => number >= 25)
console.log("Numbers greater than or equal to 25:", numbersGreaterThanEqual25)

// Q2
const numbersDivisibleBy5 = numbers.filter(number => number % 5 === 0)
console.log("Numbers divisible by 5:", numbersDivisibleBy5)

/*****************************************************************
Part 2: Mapping

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

// Q3
const squaredNumbers = numbers.map(number => number * number)
console.log("Squared numbers:", squaredNumbers)

// Q4
const doubledNumbers = numbers.map(number => number * 2)
console.log("Numbers doubled:", doubledNumbers)

/*****************************************************************
Part 3: Combining Filtering and Mapping

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

// Q5
const filteredAndSquaredNumbers = numbers.filter(number => number >= 20).map(number => number * number)
console.log("Filtered numbers greater than or equal to 20 and squared:", filteredAndSquaredNumbers)

// Q6
const filteredAndMultipliedBy3Numbers = numbers.filter(number => number % 5 === 0).map(number => number * 3)
console.log("Filtered numbers divisible by 5 and multiplied by 3:", filteredAndMultipliedBy3Numbers)

