let name = "Gabriel";
let lastname = "Garcia";
let age = 18;
console.log('Soy '+ name + ' mi apelllido es ' + lastname);

console.log('I´m '+ name + ' mi lastname is ' + lastname);
console.log('I\'m '+ name + ' mi lastname is ' + lastname);

// Imprimir soy Francisco Lopez y teengo 39 años
// Strings Templates o Strings Literalls
// placeholder ${}
console.log(`Soy ${name} ${lastname} y tengo ${age} años`);

// metodos y atributos para Strings
const texto = "Este Es un TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5))
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);