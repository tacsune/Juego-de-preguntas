const crypto = require('crypto');

class SalaDeJuego{

    #id;
    #jugadores;
    #pregunta;
    #ganador;
    #historialDePreguntas;


    constructor(){
        this.#jugadores=[];
        this.#ganador='';
        this.#historialDePreguntas=[];
        this.#pregunta=null;
        this.#id = crypto.randomBytes(4).toString('hex');
    }

    registrarJugador(Jugador,idSala){
        if(idSala===this.#id){
            if(this.#jugadores.length<7){
                this.#jugadores.push(Jugador);
            }else{
                console.log('sala llena');
            }
        }
    }

    pregunta(){
        if(!this.#historialDePreguntas.includes(this.#pregunta.id)){
            this.#historialDePreguntas.push(this.pregunta.id);
            this.#pregunta=pregunta;

        }else{
            //solicitar otra pregunta
        }
    }

    controladorJugadores(jugador,evento){
        if(evento==='responder'){
            
        }
    }

    controladorPreguntas(){

    }

    get id(){
        return this.#id;
    }

}