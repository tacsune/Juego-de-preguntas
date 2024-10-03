class Pregunta{
    #id;
    #categoria;
    #enunciado;
    #opciones;
    #respuestaCorrecta;

    constructor(id,categoria,enunciado,opciones,respuestaCorrecta){
        this.#id=id;
        this.#categoria=categoria;
        this.#enunciado=enunciado;
        this.#opciones=opciones;
        this.#respuestaCorrecta=respuestaCorrecta;
    }

    // Getters
    get id() {
        return this.#id;
    }

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