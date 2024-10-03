const SalaDeJuego = require('./SalaDeJuego');
const PreguntaModel = require('./PreguntaModel');
const PreguntaClase = require('./Pregunta');

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

   async enviarPregunta(idSala){
        if(this.#salas.has(idSala)){
            const sala = this.#salas.get(idSala);
            const preguntadb = await this.ObtenerPreguntaAleatoria();

            const preguntaClase = new PreguntaClase(
                preguntadb._id,
                preguntadb.categoria,
                preguntadb.enunciado,
                preguntadb.opciones,
                preguntadb.RespuestaCorrecta
            );
            console.log(preguntaClase.categoria);
            sala.recibirPregunta(preguntaClase);
        }
    }

    async empezarJuego(idSala){
        if(this.#salas.has(idSala)){
            const sala = this.#salas.get(idSala);
            if(sala.jugadores.size>=2){
                await this.enviarPregunta(idSala)
            }else{
                console.log('No hay suficientes jugadores para empezar');
            }
        }else{
            console.log('Sala no encontrada');
        }
    }

    async ObtenerPreguntaAleatoria() {
        try{
            const [preguntaAleatoria] = await PreguntaModel.aggregate([{ $sample: { size: 1 } }]);
            console.log("la pregunta es: "+preguntaAleatoria);
            return preguntaAleatoria;
        }catch (error){
            console.error("Error al obtener la pregunta aleatoria: ", error);
            throw error;
        }
        
    }
    

}

module.exports = GameMediator;