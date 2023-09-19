// Iteradores de Arrays
const fruits = ['apple', 'melon', 'orange', 'cherry'];


// forEach
// Itera Array
fruits.forEach(
 function (fruit){
    console.log(`Fruta ${ fruit }`);
 }
);

console.log("Arrow function");
fruits.forEach(
    (fruit) => {
       console.log(`Fruta ${ fruit }`);
    }
   );

console.log("Arrow simplificado");
fruits.forEach( fruit => console.log(`Fruta ${fruit}`));

// map ()
// regresa un array nuevo a partir del original
const fruitsMayus = fruits.map(
 fruit =>{
    return fruit.toUpperCase();
 }
);
console.log('*'.repeat(29));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(num => num* num);
console.log(numbers);
console.log(squares);

//filter ()
// crea un array nuevp a partir  de una condicion
const endswithE = fruits.filter(fruit => fruit.endsWith('e'));
console.log(fruits);
console.log(endswithE);

const impares = numbers.filter(num => num % 2 !== 0);
console.log(numbers);
console.log(impares);

// reduce()
// Retorna un único valor a partir del array original
const sumatoria = numbers.reduce((a,b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a,b) => a*b);
console.log(numbers);
console.log(factorial);

// some()
// evalua cada elemento retorna true si al menos un cumple la condicion
console.log(numbers.some(num => num >= 6));
console.log(numbers.some(num => num > 7));

// every()
// evalua que todos los  elementos cumlpen
console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));