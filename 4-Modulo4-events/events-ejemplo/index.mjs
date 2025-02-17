import { EventEmitter } from 'events';

// Crear una instancia de EventEmitter

const emisor = new EventEmitter();

// Definir in evento personalizado

emisor.on('saludo', (nombre) => {

console.log(`Hola, ${nombre}!`);

});

// Emitir el evento 'saludo'

emisor.emit('saludo', 'Mundo');