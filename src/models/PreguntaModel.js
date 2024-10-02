const mongoose = require('mongoose');

const preguntaSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    enunciado: {
        type: String,
        required: true
    },
    opciones: {
        type: [String], // Un array de strings para las opciones
        required: true
    },
    respuestaCorrecta: {
        type: String,
        required: true
    }
});

const PreguntaModel = mongoose.model('Pregunta', preguntaSchema);

module.exports = PreguntaModel;
