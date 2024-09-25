const GameMediator = require('./models/GameMediator');
const Jugador = require('./models/Jugador');
const Pregunta = require('./models/Pregunta');

//creamos el game mediator
const gameMediator = new GameMediator();
const idSala = gameMediator.crearSala();
console.log(`Sala creada con ID: ${idSala}`);

//jugadores
const jugador1 = new Jugador(1,'carlos',true);
const jugador2 = new Jugador(2,'Andres',true);
const jugador3 = new Jugador(3,'cristian',true);

gameMediator.ingresarSala(jugador1,idSala);
gameMediator.ingresarSala(jugador2,idSala);
gameMediator.ingresarSala(jugador3,idSala);


//preguntas
const pregunta = new Pregunta(
    'ciencia',
    '¿QUE SIGNIFICA H2O?',
    ['AGUA','OXIGENO','DIOXIDO DE CARBONO'],
    'AGUA'
);

gameMediator.empezarJuego(idSala,pregunta);

console.log(jugador1.puntos);

jugador1.responderPregunta(gameMediator, 'AGUA');

console.log(jugador1.puntos);
