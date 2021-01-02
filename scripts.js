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

*/

//Since you cannot mutate/reassign variables you can't declare a const var without a value

//****** Coding "Challenge" LOL *************//

const markHeight = 1.69;
const markWeight = 92;

const johnHeight = 1.88;
const johnWeight = 95;

const markBMI = (markWeight / markHeight ** 2) / (markHeight * markHeight);

const johnBMI = (johnWeight / johnHeight ** 2) / (johnHeight * johnHeight);

const MarkHigherBMI = markBMI > johnBMI;
console.log(MarkHigherBMI);

if(markBMI > johnBMI) {
    console.log("Mark's BMI of " + markBMI + "is Greater!");
} else if (johnBMI > markBMI) {
    console.log("John's BMI of " + johnBMI + "is Greater!");
} else {
    console.log("Their BMI is the same!");
}