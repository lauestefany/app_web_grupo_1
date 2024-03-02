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
