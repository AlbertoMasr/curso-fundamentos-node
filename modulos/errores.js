function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

try {
    otraFuncion();
} catch (err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message);
}
console.log('Esto de aquí está al final');