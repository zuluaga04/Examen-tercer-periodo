let contraseña, correo;

let formulario = document.getElementById('form');


formulario.addEventListener('submit', (e) => {
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    contraseña = document.getElementById('contraseña').value
    correo = document.getElementById('correo').value
    
    ValidarData(contraseña, correo)
    ListaData(contraseña, correo)
}

function ValidarData (contraseña, correo) {
    if(contraseña.length==0 || correo.length==0) {
        alert('Error')
        swal("Good job!", "You clicked the button!", "error");
    }
}


function ListaData(contraseña, correo){
    let contraseñaUs = localStorage.getItem('Contraseña');
    let correoUs = localStorage.getItem('Correo');
    console.log(contraseñaUs+correoUs)
    
    if (correo==correoUs && contraseña==contraseñaUs){
        alert('Entraste')
    }
    else{
        swal('Error');
    }

}

