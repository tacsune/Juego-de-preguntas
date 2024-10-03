const crypto = require('crypto');

class SalaDeJuego{

    #id;
    #jugadores;
    #pregunta;
    #ganador;
    #historialDePreguntas;
    #gameMediator;

    constructor(gameMediator){
        this.#jugadores=new Map();
        this.#ganador=null;
        this.#historialDePreguntas=[];
        this.#pregunta=null;
        this.#id = crypto.randomBytes(4).toString('hex');
        this.#gameMediator=gameMediator;
    }

    registrarJugador(jugador) {
        if (this.#jugadores.size < 7) {  // Verifica si hay menos de 7 jugadores
            jugador.salaDeJuego = this;
            this.#jugadores.set(jugador.id, jugador);  // Agrega al jugador al Map
            console.log(`${jugador.nombre} se ha unido a la sala`);
        } else {
            console.log('Sala llena');
        }
    }

    recibirPregunta(pregunta){
        if(!this.#historialDePreguntas.includes(pregunta.id)){
            this.#historialDePreguntas.push(pregunta.id);
            this.#pregunta=pregunta;
            console.log("Pregunta recibida:", this.#pregunta); // Añade esto para depurar
            this.mostrarPregunta();
        }else{
            console.log('pregunta repetida, Solicitando otra...');
        }
    }

    mostrarPregunta(){
        this.#jugadores.forEach((jugador) => {
            jugador.recibirPregunta(this.#pregunta);
        });        
    }

    recibirRespuesta(jugador,respuesta){
        if(respuesta===this.#pregunta.respuestaCorrecta){
            // this.#jugadores.has(jugador.id).puntos((this.#jugadores.has(jugador.id).puntos)+1);

            jugador.puntos++;

            if(jugador.puntos>=2){
                this.#ganador=jugador;
                console.log("GANADOR:"+jugador.nombre);
            }else{
                this.#gameMediator.enviarPregunta(this.#id);
            }

            console.log('respuesta Correcta');

        }else{
            console.log('respuesta Incorrecta');
        }
    }

    get jugadores() {
        return this.#jugadores;
    }

    get id(){
        return this.#id;
    }

}

module.exports = SalaDeJuego;