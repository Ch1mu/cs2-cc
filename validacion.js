document.getElementById('miFormulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var checkpassword = document.getElementById('checkpassword').value;
    var denegado = false;

    if (!nombre) {
        alert('Falta completar el nombre.');
       denegado = true;
    }

    if (!email) {
        alert('Falta completar el email.');
       denegado = true;
    }

    if (!password) {
        alert('Falta completar el password.');
       denegado = true;
    }

    if (!checkpassword) {
        alert('Falta completar el checkpassword.');
       denegado = true;
    }

    if(password !== checkpassword){
        alert('Las contraseñas no son iguales.');
        denegado = true;
    }

    if(denegado == true){
        event.preventDefault();
    }

});
