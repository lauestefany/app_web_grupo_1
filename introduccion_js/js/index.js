var nombre = "pepe";
let apellido="perez";
const numero=12;
apellido = 'Gomez';
let numeroDos = 12.36;
let datoBolleano = false;
let pares =[2,4,6,8,10];
let jobs =['Libros', 'Deportes', 'Cine'];
console.log(pares[2]);
let persona ={
    nombre:'Juan',
    apellido: 'Perez',
    edad: 28,
    jobs:['Libros', 'Deportes'],
    otrosDatos:{
        telefono:1234,
        email: 'test@test.com'

    }
};
console.log(persona['nombre'],persona.nombre);
console.log(persona.jobs[1],persona.otrosDatos.email);
const personas = [
    {nombres:'persona 1', edad: 17, categoria:'a'},
    {nombres:'persona 2', edad: 27, categoria:'b'},
    {nombres:'persona 3', edad: 40, categoria:'c'},
    {nombres:'persona 4', edad: 30, categoria:'a'},
    {nombres:'persona 5', edad: 15, categoria:'b'},
    {nombres:'persona 6', edad: 18, categoria:'c'},
];
console.log('for----------------------');
for(let index=0;index< personas.length-1;index++){
    console.log(personas[index].nombres);
}
console.log('for in------------------');
for(let index in personas){
    console.log(personas[index].nombres);   
}
console.log('for of--------------------');
for(let itm of personas){
    console.log(item.nombres);   
}
console.log('while---------------------');
let index = 0;
while(index<personas.length){
    console.log(personas[index].nombres);
    index++;
}
console.log('do while--------------------');
index++;
do {
    console.log(personas[index].nombres);   
} while (index<personas.length);
console.log('foreach-----------------');
personas.forEach(()=>{
    console.log(index, item.nombres);

});

let m = '12';
if(m === 12){
    console.log(m,'ok');

}else if (m <= 12){
    console.log(m, 'menos1');
}else{
    console.log(m, 'not');

}
/**! negacion
== igual valor
=== igual valor tipo
<
>
<=
>=
&& anfd
|| or
*/
let categoria = 'a';
switch (categoria){
    case 'a':
        console.log('categoria A');
        break;
    case 'B':
        console.log('categoria B');
        break;
     case 'C':
        console.log('categoria C');
        break;
    default:
        console.log('SIN DEFINIR ');
        break;

}
function sumar (a,b){
    return a + b;
}
function esMayorEdad(edad){
    if(edad<18){
        return 'Es mayor de edad';
    }else{
        return 'Es mayor de edad';
    }
}

let resultado = sumar(2, 5);
function realizarSuma(a, b){
    console.log(a + b);
}
realizarSuma(2, 'dos');
const sumar2 =  (a, b) => {
    return a + b;
}
console.log(sumar2(5,9));

class Esttudiante{
    nombre;
    edad;
    email;
    codigo;

    constructor(nombre,edad,email,codigo){
        this.nombre=nombre;
        this.edad= edad;
        this.email = email;
        this.codigo= codigo;


    }
    esMayorEdad(){
       // if (this.edad<18){
         //   return'Es menor de edad';

       // }else{
            //return 'Es mayor de edad';
        //}
        return this.edad < 18
        ? ' es menor de edad'
        : 'Es meayor de edad';
    }
}
const estudiante = new Estudiante('Pepe',17,'tests@test.com', '1234');
console.log(estudiante.nombre,estudiante.esMayorEdad());

class EstudianteSistemas extends Estudiante {
    constructor(codigo) {
        super('Ana',28,'tests@test.com', codigo);
    }
}
const sistemas = new EstudianteSistemas('654321');
console.log(sistemas.nombre,sistemas.esMayorEdad(),sistemas.codigo);

