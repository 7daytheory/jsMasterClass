//Activate Strict mode for entire script
'use strict';

//Javascript Fundamentals part 2

/*
let hasDriversLicense = false;
const passTest = true;

// spelled var name wrong
if(passTest) hasDriverLicense = true;

if(hasDriversLicense) console.log("I can drive");

const interface = 'Audio';
const private = 424;

// Without use strict it wouldn't report the bug & reserved words

//Function (lol)
function logger() {
  console.log("My name is Matt");
}

// Calling the function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// 000 values being passed are called "argument"
// stored returned result in "juice var"
const juice = fruitProcessor(1, 3);
console.log(juice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Keep your code "dry" -> don't repeat yourself

// Function declarations
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
    //return 2021 - birthYear; (works also)
}

//000 1991 is the argument - birthYear(in function) is the paramater
const age = calcAge1(1991);

// We can call function declaration *before* they are defined
// We CANNOT call function expressions before they are defined

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age, age2);

// *************  Arrow Function ****************** //
//000 Arrow function RETURN with defining return value;
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);

console.log(age3);

//Arrow functions only auto return in single value functions
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Matt"));


// Calling functions within functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange slices`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Functions coding "challenge" #1

const calcAverage = (scores) => {
  let totalScore = 0;
  for(let i = 0; scores.length > i; i++) {
    totalScore = scores[i] + totalScore;
  }
  return totalScore;
}

function checkWinner(avgDolphins, avgKoalas) {
  if(avgKoalas > (avgDolphins * 2)) {
    console.log("Koalas Win!")
  } else if(avgDolphins > (avgKoalas * 2)) {
    console.log("Dolphins win!");
  } else {
    console.log("No one wins!");
  }
}

//Situation One
const koalasScore = calcAverage([44,23,71]);
const dolphinsScore = calcAverage([65,54,49]);

//Situation Two
const koalasScore2 = calcAverage([85,54,41]);
const dolphinsScore2 = calcAverage([23,34,27]);

checkWinner(koalasScore, dolphinsScore);
checkWinner(koalasScore2, dolphinsScore2);

// *********** ARRAYS ***************** //

//literal syntax
const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 2324, 1284, 2144);

console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';

console.log(friends);

// Only primitive values are not able to be changed with const. You can mutate values in the array but not change the WHOLE array

// Arrays can store multiple types of data and other arrays
const matt = ['Matt', 'Lowe', 2021 - 1991, friends];

console.log(matt);

const calcAge = function(birthYear) {
  return 2021 - birthYear;
}

const yearsBirth = [1990, 1991, 1992, 1993, 1994, 1995];

const age1 = calcAge(yearsBirth[0]);
const age2 = calcAge(yearsBirth[3]);
const age3 = calcAge(yearsBirth[yearsBirth.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(yearsBirth[0]), calcAge(yearsBirth[2]), calcAge(yearsBirth[yearsBirth.length - 1])];

console.log(ages);

*/



