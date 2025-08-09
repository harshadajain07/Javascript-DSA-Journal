const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);

const namedSymbol = Symbol("name");
console.log(typeof namedSymbol);
console.log(namedSymbol);

console.log(mySymbol === namedSymbol);
console.log(Symbol("name") === namedSymbol);

console.log(mySymbol === mySymbol);
console.log(mySymbol.description);
console.log(namedSymbol.description);
