const os = require('os');

console.log(os.arch()); // Detecta la arquitectura del sistema operativo
console.log(os.platform()); // Detecta el sistema operativo
console.log(os.cpus()); // Detecta los procesadores del sistema
console.log(os.constants); // Muestra las constantes del sistema operativo (se pueden usar para errores)
console.log(os.freemem()); // Muestra la memoria libre del sistema en bytes
console.log(os.totalmem()); // Muestra la memoria total del sistema en bytes
console.log(os.homedir()); // Muestra el directorio raíz del usuario
console.log(os.tmpdir()); // Muestra el directorio temporal del sistema
console.log(os.hostname()); // Muestra el nombre del host
console.log(os.networkInterfaces()); // Muestra las interfaces de red del sistema