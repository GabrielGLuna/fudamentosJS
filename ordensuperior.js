//Funciones de Orden Superior
// High order functions
// Funciones que reciben como parametros otras funciones

const myfunctionwithbigname = () =>{
    console.log(" Funcion inicial ");

}
console.log(myfunctionwithbigname);
myfunctionwithbigname();;

const myFun = myfunctionwithbigname;
myFun();

const funone = () =>{
    console.log('Ejecuta Funcion uno ');
}

const funtwo = (nombre) =>{
    console.log("hi! "+ nombre);
    console.log('Ejecuta Funcion dos ');
}
funone();
funtwo('piti');

const funthree = (otherfunction) =>{
    console.log('Inicia funcion tres ');
    otherfunction();
    console.log('Termina funcion tres');
}

funthree(funone);
funthree(() => console.log('Funcion de flecha'));

