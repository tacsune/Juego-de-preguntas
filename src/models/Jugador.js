class Jugador{

    #id
    #nombre
    #puntos
    #estado
    #salaDeJuego
    #respuesta;

    constructor(id,nombre,estado){
        this.#id=id;
        this.#nombre=nombre;
        this.#puntos=0;
        this.#estado=estado;
        this.#salaDeJuego=null;
        this.#respuesta='';
    }

    recibirPregunta(pregunta){
        console.log('usuario:'+this.#nombre+' recibe: '+pregunta.enunciado);
    }

    responderPregunta(mediator,respuesta){
        mediator.procesarRespuesta(this,respuesta);
    }

    //getters
    get id(){
        return this.#id;
    }

    get nombre(){
        return this.#nombre;
    }

    get puntos(){
        return this.#puntos;
    }

    get estado(){
        return this.#estado;
    }

    get salaDeJuego(){
        return this.#salaDeJuego;
    }

    get respuesta(){
        return this.#respuesta;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set puntos(nuevosPuntos) {
        this.#puntos=nuevosPuntos;
    }

    set estado(nuevoEstado) {
        this.#estado = nuevoEstado;
    }

    set salaDeJuego(nuevaSala) {
        this.#salaDeJuego = nuevaSala;
    }

    set respuesta(respueta) {
        this.#respuesta = respuesta;
    }

}

module.exports = Jugador;