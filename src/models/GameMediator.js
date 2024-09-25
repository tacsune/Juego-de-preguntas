const SalaDeJuego = require('./SalaDeJuego');

class GameMediator{

    #salas

    constructor(){
        this.#salas=new Map();
    }

    crearSala(){
        const salaDeJuego = new SalaDeJuego(this);
        this.#salas.set(salaDeJuego.id,salaDeJuego);
        return salaDeJuego.id;
    }

    ingresarSala(jugador,idSala){
        if(this.#salas.has(idSala)){
            this.#salas.get(idSala).registrarJugador(jugador);
        }else{
            console.log('sala no encontrada');
        }
    }

    procesarRespuesta(jugador,respuesta){
        const sala = jugador.salaDeJuego;
        sala.recibirRespuesta(jugador,respuesta);
    }

    enviarPregunta(idSala,pregunta){
        if(this.#salas.has(idSala)){
            const sala = this.#salas.get(idSala);
            sala.recibirPregunta(pregunta);
        }
    }

    empezarJuego(idSala,pregunta){
        if(this.#salas.has(idSala)){
            const sala = this.#salas.get(idSala);
            if(sala.jugadores.size>=2){
                this.enviarPregunta(idSala,pregunta)
            }else{
                console.log('No hay suficientes jugadores para empezar');
            }
        }else{
            console.log('Sala no encontrada');
        }
    }

}

module.exports = GameMediator;