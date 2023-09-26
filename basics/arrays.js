// Arrays en Javascript

const miarray = [1,2,3,true, 'Hola', 'O', 2.1, [1,2,3,2,1]];
console.log(miarray);
console.log(miarray[0]);
console.log(miarray[1]);
console.log(miarray[2]);
console.log(miarray[3]);
console.log(miarray[-1]);// verificar
miarray[0] = true;
miarray[3]= false;
console.log(miarray)

// pilas en JS
// Last in first out
// Ingresar valores al final push()
// Extraer valores del final pop()
// pop, shift, unshift, push
const pila = [];
// Insertar valores con
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila);
pila.pop();
console.log(pila);
console.log(pila.pop());
console.log(pila);

//Colas en JS
// filas in first out
const cola = [];
cola.unshift(1);
cola.unshift(2);
cola.unshift(3);
console.log(cola);
console.log(cola.shift());
console.log(cola);
console.log(cola.shift());
console.log(cola);

