/*
//Data Types

//Objecsts and Primitive

//Object
let me = {
    name: 'Matt',
}

console.log(me.name);

//Primative -> Everything not an Object
//Javascript has dynamic typing -> Do NOT have to define it manually as it automatically defines it so:
//Numbers can be change to String and visa versa etc
/*
1. Number: Floating Point numbers. Used for decimal and integers
2/ String : Sequence of characters: used for text
3: Boolean: Logical type that can be used only be true or false
4: Undefined: Value taken by a var not defined yet
5: Null : Empty Value
6: Symbol(ES2015): value that is unique and cannot be change
7: BigInt(ES2020): Larger integers than the Number type can hold


//Data Types
let javascript = true;
console.log(javascript);

console.log(typeof true);
console.log(typeof javascript);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Dynamic Typing example
javascript = "YEAH!";
console.log(typeof javascript);

//undefined
let year;
console.log(year);
console.log(typeof year);

//null
let none = null;
console.log(none);

//Console log "Bug" -> typeof null is shown as an object
console.log(typeof none);


//***let, const, and var****

// let

let age = 30;

//reassiging a value (mutating variable)
age = 40;

// const
// cannot be changed
const birthYear = 1991;

//Since you cannot mutate/reassign variables you can't declare a const var without a value

//****** Coding "Challenge" LOL *************

const markHeight = 1.69;
const markWeight = 92;

const johnHeight = 1.88;
const johnWeight = 95;

const markBMI = markWeight / markHeight ** 2;

const johnBMI = johnWeight / (johnHeight * johnHeight);

const MarkHigherBMI = markBMI > johnBMI;
console.log(MarkHigherBMI);

if(markBMI > johnBMI) {
    console.log("Mark's BMI of " + markBMI + "is Greater!");
} else if (johnBMI > markBMI) {
    console.log("John's BMI of " + johnBMI + "is Greater!");
} else {
    console.log("Their BMI is the same!");
}

const firstName = 'Jonas';
const job = 'developer';
const birthYear = 1991;
const year = 2021;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

//000 template literals (back ticks)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\ a new line');

console.log(`String
multiple
lines`);

const age = 15;

if(age >= 18) {
    console.log("Too young to drive");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can drive in ${yearsLeft} years!`);
}

const birthYear = 1991;
let century;

//000 century must be defined OUTSIDE the if statement
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


/************* CODING "CHALLeNGE" LOL #2 ***********


const markHeight = 1.69;
const markWeight = 92;

const johnHeight = 1.88;
const johnWeight = 95;

const markBMI = markWeight / markHeight ** 2;

const johnBMI = johnWeight / (johnHeight * johnHeight);

if(markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}


//000 Type Conversion and Coercion

//Conversion = Manual convert one type to another
//Coercion = Javascript automatically changes the values

//Type Conversion

// This will add 18 to the end of 1991 because it's viewed as a string
const inputYear = '1991';
console.log(inputYear + 18);

// Will add together
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
//NaN = Not a Number or invalid number
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion

//JS auto converts 23 to a string
console.log('I am ' + 23 + ' years old');

console.log('23' - '10' - 3);

// + does NOT auto convert strings to ints
console.log('23' + '10' - 3);

console.log('23' - '10' * 3);

console.log('23' >  '18');

let n = '1' + 1; //11
n = n - 1; // 11 - 1 = 10;

console.log(n);


// 000 Truthy and Falsy Values(Booleans)

// 5 falsy values : 0, '', undefined, null, NaN
// everything else is converted to true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

//0 is converted to a boolean -> false
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("No Money!")
}

const money2 = 100;

//100 is converted to a boolean -> true
if(money2) {
    console.log("Don't spend it all");
} else {
    console.log("No Money!")
}


let height;
//height = 50;
if(height) {
    console.log('Yay!');
} else {
    console.log("height is undefined");
}

//Equality Operators

// === 'strict' does not perform coercion
// == 'loose' DOES type coercion

const age = '18';
//const age = 18;
if(age === 18) console.log(`You are ${age} years old`);

if(age === '18') console.log(`Strict: You are ${age} years old!`);

if(age == '18') console.log(`Loose: You are ${age} years old!`);

const favourite = Number(prompt("What's your fav number?"));

console.log(favourite);
console.log(typeof favourite);

if(favourite == 23) { // '23' == 23
    console.log('Cool! 23 is great');
} else if (favourite === 7) {
    console.log('7 is a great number');
} else {
    console.log("No cool numbers");
}

if(favourite !== 23) console.log("Why not 23?");


///// Logical Operators

const driversLicense = true;
const goodVision = true;

console.log(driversLicense && goodVision);
console.log(driversLicense || goodVision);
console.log(!driversLicense);

if(driversLicense && goodVision) {
    console.log('Sarah is good to Drive!')
} else {
    console.log('Not good to drive!');
}

const isTired = false;
console.log(driversLicense && goodVision && isTired);

console.log(driversLicense || goodVision || isTired);

if(driversLicense && goodVision && !isTired) {
    console.log('Good to drive!')
} else {
    console.log('Dont drive!')
}


// ********** Coding "Challenge" 3 LOL ***********

const minScore = 100;
const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

// const minScore = 100;
// const dolphins = [97, 112, 101];
// const koalas = [109, 95, 123];

// const minScore = 100;
// const dolphins = [97,112,101];
// const koalas = [109,95,106];

// I did this wrong -- too "advanced" for basics
let i = 0;
while(i < koalas.length) {

console.log(`Dolphins: ${dolphins[i]}, Koalas: ${koalas[i]}`);
if(dolphins[i] >= minScore && dolphins[i] >= koalas[i]) {
    console.log("Dolphins win!")
} else if(koalas[i] >= minScore && dolphins[i] <= koalas[i]) {
    console.log("Koalas win!")
} else if (koalas[i] >= minScore && dolphins[i] >= minScore && dolphins[i] === koalas[i]){
    console.log("Tie Game")
} else {
    console.log("No Winner!")
}
i++;
}

// What they actualy wanted...

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (109 + 95 + 110) / 3;

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins Win!")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win!")
} else if (scoreDolphins === scorekoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Tie Game!")
} else {
    console.log("No one wins!")
}


//000 Conditional Ternary Operator
const age = 23;
age >= 19 ? console.log('I can drink alcohol') : console.log('I cannot drink alcohol');

//Ternary operator
const drink = age >= 18 ? 'alcohol' : 'water';

// Same thing without the ternary operator
let drink2;
if(age >= 18) {
  drink2 = 'alcohol';
} else {
  drink2 = 'water';
}

//Ternary Operator inside back quotes(template literals)
console.log(`I like to drink ${age >= 18 ? 'alcohol' : 'water'}`);


// *********** Coding "Challenge" 4 ************ //

const bill = 275;

const tip = bill > 50 && bill < 200 ? 0.15 : 0.2;

const total = `The total of your bill is ${bill + (bill * tip)}`;

console.log(total);

*/


/////////////////// BABEL ///////////////////

//Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)


