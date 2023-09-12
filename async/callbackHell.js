function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, miCallback) {
    setTimeout(function() {
        console.log('Adios '+ nombre);
        miCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
// hola("Alberto", function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     })
// });

function conversacion(nombre, veces, callback) {
    if (veces <= 0) {
        adios(nombre, callback);
        return;
    }

    hablar(function() {
        conversacion(nombre, --veces, callback);
    });
}

hola("Alberto", function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Terminando proceso...');
    });
});