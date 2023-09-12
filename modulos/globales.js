console.log(global);

// Funciones
let i = 0;
setInterval(function(){
    console.log(i);
    i++;
    if(i === 3) {
        clearInterval(this);
    }
}, 1000)

setImmediate(function(){
    console.log('Hola');
});

// variables
console.log(__dirname);
console.log(__filename);

// crear variables globales
global.miVariable = 'miVariable global';
console.log(miVariable);