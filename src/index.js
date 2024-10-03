require('./database');
// require('./seeds/pregunta');
const app = require('./server');
const GameMediator = require('./models/GameMediator');
const Jugador = require('./models/Jugador');
const Pregunta = require('./models/Pregunta');

//creamos el game mediator
const gameMediator = new GameMediator();
const idSala = gameMediator.crearSala();
console.log(`Sala creada con ID: ${idSala}`);

// //jugadores
const jugador1 = new Jugador(1,'carlos',true);
const jugador2 = new Jugador(2,'Andres',true);
const jugador3 = new Jugador(3,'cristian',true);

gameMediator.ingresarSala(jugador1,idSala);
gameMediator.ingresarSala(jugador2,idSala);
gameMediator.ingresarSala(jugador3,idSala);

// gameMediator.empezarJuego(idSala);
(async () => {
    await gameMediator.empezarJuego(idSala); // Espera a que se envíe la pregunta
    console.log(jugador1.puntos);
    jugador1.responderPregunta(gameMediator, 'AGUA');
    console.log(jugador1.puntos);
})();




// app.listen(app.get('port'), ()=>{
//     console.log('Server on port', app.get('port'));
// });
