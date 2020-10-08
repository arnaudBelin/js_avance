let fruits =  ['Apple', 'Orange'];

// let newFruits = fruits;

// newFruits.push('Banana')

// console.log(newFruits.length === fruits.length) // true

// console.log(fruits);
// console.log(newFruits);

// copy
let newFruits = [];

for(const fruit of fruits) newFruits.push(fruit);

newFruits.push('Banana');

console.log(fruits);
console.log(newFruits);
