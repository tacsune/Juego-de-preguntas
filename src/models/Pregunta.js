class Pregunta{

    #categoria;
    #enunciado;
    #opciones;
    #respuestaCorrecta;

    constructor(categoria,enunciado,opciones,respuestaCorrecta){
        this.#categoria=categoria;
        this.#enunciado=enunciado;
        this.#opciones=opciones;
        this.#respuestaCorrecta=respuestaCorrecta;
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

}

module.exports = Pregunta;