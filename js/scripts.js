/*JS code is always executed top to bottom, line by line.

  alert('Hello World'); creates pop-up
  console.log(); writes things into the console
  document.write(); writes something on document*/

/* Primitive data types: 6 types=> strings, numbers, boolean, null, undefined, symbol. 
Strings:
let text1 = 'This is a text!';
let text2 = "This uses double quotes."
document.write(text1);
document.write(text2);
let escapedText = "He said: \"Yes!\", that's for sure.";
let escapedText2 = 'He said: "Yes!", that\'s for sure.';
document.write(escapedText);
document.write(escapedText2);

alert('Hello World');

let myName = 'Zubair';
let age = 31;
let message = `Hello! This is a longer message here. 
My name is ${myName},
and I'm ${age}.`;
document.write(message);

/*Booleans come in one of two states: true or false. they are written as true or false
let boolean1 = true;
let boolean2 = false;
let notABoolean = 'true';*/

/*null indicates the value has been INTENTIONALLY SET TO BE EMPTY and undefined indicates that the value was NEVER SET*/

/*Complex data types: made of multiple primitive or complex data types.
Objects: An object is a complex data type*/

/*Arrays are ordered lists of data item. example:
let userAges = [27, 112, 87]; 

array of arrays: 
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

mixed array:
let numberArray = [1, 2, 3];
let mixedArrays = [
  1,
  'two',
  numberArray,
  { naans: 5 }
];
document.write(mixedArrays);*/

alert("Welcome!");

let pokemonList = [{name: "Onyx", type: "Rock", height: "8.8m"} , {name: "Weedle", type: "Bug", height: "0.3m"} , {name: "Squirtle", type: "Water", height: "0.5m"}];

console.log(pokemonList[0]);
console.log(pokemonList[1]);
console.log(pokemonList[2]);


console.log(pokemonList[0]);
console.log(pokemonList[1]);
console.log(pokemonList[2]);
