// Todo esto se queda en memoria hasta que se reinicie el servidor

let buffer1 = Buffer.alloc(4); // Crear un buffer de 4 bytes
let buffer2 = Buffer.from([1, 2, 3, 4]); // Obtener un buffer de 4 bytes desde un arreglo
let buffer3 = Buffer.from('Hola'); // Obtener un buffer de 4 bytes desde un string

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString()); // Convertir el buffer a string

//Abecedario con buffer
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());