console.log('Hola mundo');
console.warn('Algo está pasando');
console.error('Algo salió mal');

let tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla);

console.group('Conversación');
console.log('1: Hola');
console.log('2: Hola');
console.log('1: ¿Cómo estás?');
console.groupEnd('Conversación');

console.count('veces');
console.count('veces2');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces2');