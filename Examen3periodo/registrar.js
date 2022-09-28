let nombre, correo, apellido, contraseña, numero;

let formulario = document.getElementById('form');


formulario.addEventListener('submit', (e) => {
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    apellido = document.getElementById('apellido').value
    contraseña = document.getElementById('contraseña').value
    numero = document.getElementById('numero').value
    
    ValidarData(nombre, correo, apellido, contraseña, numero)
    guardarLocarStorage(nombre, correo, apellido, contraseña, numero)
}

function ValidarData (nombre, correo, apellido, contraseña, numero) {
    if(nombre.length==0 || correo.length==0 || apellido.length==0 || numero.length==0 || contraseña.length==0) {
        alert('Error')
        swal("Good job!", "You clicked the button!", "error");
    }
}

function guardarLocarStorage(nombre,correo, apellido, contraseña, numero ){
    localStorage.setItem('Nombre',nombre);
    localStorage.setItem('Correo',correo);
    localStorage.setItem('Apellido',apellido);
    localStorage.setItem('Numero', numero);
    localStorage.setItem('Contraseña', contraseña);
    ListaData()
}

function ListaData(){
    let nombreUs = localStorage.getItem('Nombre');
    let correoUs = localStorage.getItem('Correo');
    let apellidoUs = localStorage.getItem('apellido');
    let numeroUs = localStorage.getItem('numero');
    let contraseñaUs = localStorage.getItem('contraseña');
    swal(nombre);
}