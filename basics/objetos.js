/* Los objetos nos permiten almacenar datos a partir de una clave
miobjeto = {clave : valor, 'clave', : valor}
mi objeto.clabe
miobjeto['clave']; */

const subject = {
    name : 'Programacion',
    totalhours : 90,
    weekhours: 7,
    classroom: 'Lab Progra',
    teacher: 'Jose Manuel', 
    'practice hours': 90
}

console.log(subject.name);
console.log(subject.totalhours);
console.log(subject.weekhours);
console.log(subject.classroom);
console.log(subject.teacher);
console.log(subject['practice hours']);

subject.classroom = 'Lab Programacion 1';
console.log(subject.classroom);

console.log(subject);

subject['teorical hours'] = 30;
console.log(subject);

const group ={
    name : '4C',
    career: 'TIADSM',
    subjects: [
        subject
    ],
    students: [
        {name:'Gael', lastname: 'Perez'},
        {name:'Juan', lastname: 'Sanchez'},
        {name:'Dani', lastname: 'Alvarez'}
    ]
}

console.log(group);
console.log(group['students']);