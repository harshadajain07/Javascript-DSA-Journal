const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);

const namedSymbol = Symbol("monkey");
console.log(typeof namedSymbol);
console.log(namedSymbol);

console.log(mySymbol === namedSymbol);
console.log(Symbol("monkey") === namedSymbol);

console.log(mySymbol === mySymbol);
console.log(mySymbol.description);
console.log(namedSymbol.description);

const characters = {
  name: "Money Heist",
  class: "Axe Riskey",
  quote: "I'll never let you down",
  __admin__: false,
};
// console.log(characters.name);
// console.log(characters.class);
// console.log(characters.quote);
// console.log(characters.__admin__);

//Return the string indices of "0","1","2","3"
for (const key in Object.keys(characters)) {
  console.log(key);
}

//Return actual key name of object
for (const key of Object.keys(characters)) {
  console.log(key);
}

const keys = Object.keys(characters);
for (idx in keys) {
  console.log(keys[idx]);
}
