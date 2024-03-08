let numeros=[0, 1, 2, 3, 4,5 , 6, 7, 8, 9, 10];
console.log(numeros);
numeros.push(11);
console.log(numeros);
numeros.unshift(12);
console.log(numeros);
const lista= numeros.concat([13,14,15]);
console.log(numeros);
lista.splice(0,5);
console.log(lista);
console.shift();
console.log(lista);



const posicion = lista.findIndex((item)=>item === 5);
lista.splice(posicion,1);
console.log(lista);
const par = lista.find((value)=>value % 2 === 0);
console.log(par);
const numerspares= lista.filter((value)=>value % 2 === 0);
console.log(numerspares);
const listaOrden = lista.sort((a,b)=> {
    return b-a;
})
console.log(listaOrden);
const trasnPares = numerspares.map((value, index) =>{
    return 'El numero par'+ index + 'es:'+ value;
});
console.log(trasnPares); 
function mostrarMsg() {
    document.getElementById('tituloH1').innerText= 'Hola mundo';
}









