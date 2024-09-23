class GameMediator{

    #salas

    constructor(){
        this.#salas=new map();
    }

    crearSala(){
        const salaDeJuego = new SalaDeJuego();
        this.#salas.push(salaDeJuego);
        return salaDeJuego.id;
    }

    ingresarSala(Jugador,id){
        
    }




}