let nombre = process.env.NOMBRE || 'Sin nombre';
let WEB = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + WEB);