function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 3000);
}

function adios(nombre, miCallback) {
    setTimeout(function() {
        console.log('Adios '+ nombre);
        miCallback();
    }, 3000);
}

console.log('Iniciando proceso...');
hola("Alberto", function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});