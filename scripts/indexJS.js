var mapas = [
    {
        nombre: "Dust II",
        tipo: "Desierto",
        jugadores: "10-20",
        dificultad: "Media"
    },
    {
        nombre: "Inferno",
        tipo: "Ciudad",
        jugadores: "10-20",
        dificultad: "Alta"
    },
    {
        nombre: "Mirage",
        tipo: "Ciudad",
        jugadores: "10-20",
        dificultad: "Media"
    }
];

var armas = [
    {
        tipo: "Pistola",
        balas: 12,
        precio: 500,
        nombre: "Glock"
    },
    {
        tipo: "Rifle de Asalto",
        balas: 30,
        precio: 2500,
        nombre: "AK-47"
    },
    {
        tipo: "Francotirador",
        balas: 5,
        precio: 4500,
        nombre: "AWP"
    }
];

function mostrarMapas() {
    var listaMapasElement = document.getElementById("listaMapas");

    mapas.forEach(function(mapa) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Nombre:</strong> ${mapa.nombre}, 
            <strong>Tipo:</strong> ${mapa.tipo}, 
            <strong>Jugadores:</strong> ${mapa.jugadores}, 
            <strong>Dificultad:</strong> ${mapa.dificultad}
        `;
        listaMapasElement.appendChild(listItem);
    });
}


function mostrarArmas() {
    var listaArmasElement = document.getElementById("listaArmas");

    armas.forEach(function(arma) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Tipo:</strong> ${arma.tipo}, 
            <strong>Balas:</strong> ${arma.balas}, 
            <strong>Precio:</strong> $${arma.precio}, 
            <strong>Nombre:</strong> ${arma.nombre}
        `;
        listaArmasElement.appendChild(listItem);
    });
}

function onFormSubmit(){
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var denegado = false;

    if (!nombre ) {
        alert('Falta completar el nombre.');
       denegado = true;
    }
    if(!nombre.includes(" ")){
        alert('ERROR se requiere el nombre y apellido');
        denegado = true; 
    }

    if (!email) {
       alert('Falta completar el email.');
       denegado = true;
    }

    if(denegado){
        event.preventDefault();
    }
    else{
        alert("".concat(nombre).concat(" gracias por suscribirte! estaremos enviando todas las novedades a: ".concat(email)));
    }

});
}
