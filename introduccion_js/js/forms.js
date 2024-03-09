const saludarBtn = document.getElementById ('saludarBtn');

saludarBtn.addEventListener('click',() =>{
    const form = document.forms["saludarForm"];
    const nombreInput= form['nombre'];
    const nombreValue= nombreInput.value;
    const nombreError = document.getElementById('nombreError');
    if(!nombreValue){
       // alert('debe ingresar el nombre');
       nombreError.classList.add ('mostrarError');
    }else{
        nombreError.classList.remove('mostrarError');
        const parrafos = document.getElementsByTagName('p');
        console.log(parrafos);
        parrafos[0].innerText = 'Hola' + nombreInput.value +'!!!!!';
    }



});
document.getElementById('nombre').addEventListener('keyup',()=>{
    const form = document.forms["saludarForm"];
    const nombreInput= form['nombre'];
    const nombreValue= nombreInput.value;
    if(!nombreValue){ return;}
    const nombreLetrasError = document.getElementById('nombreLetrasError');
    if(nombreValue.search(/[0-9]/)>=0){
        nombreLetrasError.classList.add('mostrarError');
    }else {
        nombreLetrasError.classList.remueve('mostrarError');
    }

});