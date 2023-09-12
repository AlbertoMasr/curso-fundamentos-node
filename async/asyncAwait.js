function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hola(nombre) {
    await esperar(2000);
    console.log('Hola '+ nombre);
}

async function hablar() {
    await esperar(2000);
    console.log('Bla bla bla bla...');
}

async function adios(nombre) {
    await esperar(2000);
    console.log('Adios '+ nombre);
}

async function main() {
    await hola('Alberto');
    await hablar();
    await hablar();
    await adios('Alberto');
    console.log('Terminado el proceso...');
}

console.log('Iniciando el proceso...');
main();
console.log('Otro proceso...')
