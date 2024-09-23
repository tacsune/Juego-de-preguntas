class Pregunta{

    #categoria;
    #enunciado;
    #opciones;
    #respuestaCorrecta;
    #salaDeJuego

    constructor(categoria,enunciado,opciones,respuestaCorrecta,salaDeJuego){
        this.#categoria=categoria;
        this.#enunciado=enunciado;
        this.#opciones=opciones;
        this.#respuestaCorrecta=respuestaCorrecta;
        this.#salaDeJuego=salaDeJuego;
    }
    
    enviarPregunta(){
        this.#salaDeJuego.controladorDeJuego(this,'pregunta');
    }

    // Getters
    get categoria() {
        return this.#categoria;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get opciones() {
        return this.#opciones;
    }

    get respuestaCorrecta() {
        return this.#respuestaCorrecta;
    }

    get salaDeJuego() {
        return this.#salaDeJuego;
    }

}