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

let myName = '';
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

//alert("Welcome To The Pokedex!");
/*let pokemonRepository = (function (){
  let pokemonList = [
    {name: "Onyx", type: "Rock", height: 8.8},
    {name: "Weedle", type: ["Bug", "Grass"] , height: 2}, 
    {name: "Squirtle", type: "Water", height: 5},
    {name: "Raidon", type: ["Rock", "Ground"] , height: 7.6}
  ]; 
  function getAll (){
    return pokemonList;
  }
  function add(pokemon){
    pokemon.List.push(pokemon);
  }
  return {
    getAll: getAll,
    add:add
  };
})();

document.write(pokemonRepository.getAll());*/

let pokemonList = [
  {name: "Onyx", type: "Rock", height: 8.8},
  {name: "Weedle", type: ["Bug", "Grass"] , height: 2}, 
  {name: "Squirtle", type: "Water", height: 5},
  {name: "Raidon", type: ["Rock", "Ground"] , height: 7.6}
]; 

/*for (let i = 0; i < pokemonList.length; i++){
   if (pokemonList[i].type === ["Rock"||"Ground"]||["Rock"&&"Ground"] && pokemonList[i].height > 7){
     console.log(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- Wow that is BIG!");
     document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- Wow that is BIG!");
   }else if (pokemonList[i].type === "Water" && pokemonList[i].height > 3 && pokemonList[i].height < 7){
     console.log(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- that is average!");
     document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- that is average!");
   }else {
     console.log(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- that is small!");
     document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "- that is small!");
   }
 }
}*/

function getName(pokemon){
  return "Name: " + pokemon.name + "!";
}


function getHeight(pokemon){
  if (pokemon.height > 0  && pokemon.height <5){
    return "Height: " + pokemon.height + "- that is small!"  + "<br>";
  }else if (pokemon.height === 5 && pokemon.height < 7){
    return "Height: " + pokemon.height + "- that is average "  + "<br>";
  }else if (pokemon.height > 7){
    return "Height: " + pokemon.height + "- WOW! that is BIG"  + "<br>";
  }else
    return "Undefined";
}

function getType(pokemon) {
 if (typeof(pokemon.type) === 'string') {
    return "Type: "+pokemon.type;
  }
  else {
    let str = '';
    for (let i = 0; i < pokemon.type.length; i++){
      str += " Types: " + pokemon.type[i] + ", "
    }
   return str
  }
  
}

function getList(pokemon) {
  let str = '';
  for (let i = 0; i < pokemon.length; i++){
    str +=  getName(pokemon[i]) +  ", " +  getType(pokemon[i]) + ", " + getHeight(pokemon[i])
  }
  return str;
}

document.write(getList(pokemonList))


