const PreguntaModel = require('../models/PreguntaModel');

const preguntas = [
    //ciencia
    {
        categoria: 'Ciencia',
        enunciado: '¿Cuál es el planeta más grande del sistema solar?',
        opciones: ['Tierra', 'Marte', 'Júpiter', 'Venus'],
        respuestaCorrecta: 'Júpiter'
    },
    {
        categoria: 'Ciencia',
        enunciado: '¿Cuál es el planeta más pequeño de nuestro sistema solar?',
        opciones: ['Tierra', 'Marte', 'Mercurio', 'Venus'],
        respuestaCorrecta: 'Mercurio'
    },

    //historia
    {
        categoria: 'Historia',
        enunciado: '¿En qué año comenzó la Segunda Guerra Mundial?',
        opciones: ['1914', '1939', '1945', '1950'],
        respuestaCorrecta: '1939'
    },
    {
        categoria: 'Historia',
        enunciado: '¿Cuál fue el primer refresco que se llevó al espacio?',
        opciones: ['Pepsi', 'Fanta', 'Coca Cola', 'Snapple'],
        respuestaCorrecta: 'Coca Cola'
    },
    {
        categoria: 'Historia',
        enunciado: '¿Quién escribió un diario famoso mientras se escondía de los nazis en Amsterdam?',
        opciones: ['Anne Frank', 'Bridget Jones', 'Marie Curie', 'Helen Keller'],
        respuestaCorrecta: 'Anne Frank'
    },
    {
        categoria: 'Historia',
        enunciado: '¿Cuándo cayó el muro de Berlín?',
        opciones: ['1988', '1989', '1990', '1991'],
        respuestaCorrecta: '1989'
    },

    //deportes
    {
        categoria: 'Deportes',
        enunciado: '¿Para qué país jugó David Beckham?',
        opciones: ['España', 'Brasil', 'EE.UU', 'Inglaterra'],
        respuestaCorrecta: 'Inglaterra'
    },
    {
        categoria: 'Deportes',
        enunciado: '¿Cuál es el deporte nacional de Canadá?',
        opciones: ['Bolos', 'Baloncesto', 'Lacrosse', 'Fútbol'],
        respuestaCorrecta: 'Lacrosse'
    },
    {
        categoria: 'Deportes',
        enunciado: '¿Qué boxeador fue conocido como “El más grande” y “El campeón del pueblo”?',
        opciones: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather', 'Oscar de la Hoya'],
        respuestaCorrecta: 'Muhammad Ali'
    },
    {
        categoria: 'Deportes',
        enunciado: '¿En qué país se celebraron los primeros Juegos Olímpicos?',
        opciones: ['Italia', 'japón', 'Grecia', 'Francia'],
        respuestaCorrecta: 'Grecia'
    },
    {
        categoria: 'Deportes',
        enunciado: '¿Cada cuántos años se llevan a cabo los Juegos Olímpicos?',
        opciones: ['Seis años', 'Cuatro años', 'Cinco años', 'Siete años'],
        respuestaCorrecta: 'Cuatro años'
    },
    {
        categoria: 'Deportes',
        enunciado: '¿Cuál es el diámetro de un aro de baloncesto en cm?',
        opciones: ['45.72 cm', '48.26 cm', '43.18 cm', '40.64 cm'],
        respuestaCorrecta: '45.72 cm'
    },

    //Entretenimiento
    {
        categoria: 'Entretenimiento',
        enunciado: '¿De qué película es el príncipe azul?',
        opciones: ['Cenicienta', 'Sirenita', 'Bella Durmiente', 'Mulán'],
        respuestaCorrecta: 'Cenicienta'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: '¿En qué país nació Justin Bieber?',
        opciones: ['Canadá', 'USA', 'Francia', 'Inglaterra'],
        respuestaCorrecta: 'Canadá'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: '¿Qué película navideña incluye un cameo de Donald Trump?',
        opciones: ['Solo en casa/Mi probre Angelito', 'Solo en casa 2: Perdido en Nueva York', 'Richie Rich', 'Una pandilla de pillos'],
        respuestaCorrecta: 'Solo en casa 2: Perdido en Nueva York'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: '¿Qué dibujito animado vive en una piña debajo del mar?',
        opciones: ['Flounder', 'Nemo', 'Rick and Morty', 'Bob Esponja'],
        respuestaCorrecta: 'Bob Esponja'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: '¿Qué dibujito animado vive en una piña debajo del mar?',
        opciones: ['Flounder', 'Nemo', 'Rick and Morty', 'Bob Esponja'],
        respuestaCorrecta: 'Bob Esponja'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: '¿A quienes besó Madonna en los VMAs 2003?',
        opciones: ['Jennifer Lopez y Shakira', 'Britney Spears y Janet Jackson', 'Britney Spears y Christina Aguilera', 'Christina Aguilera y Kylie Minogue'],
        respuestaCorrecta: 'Britney Spears y Christina Aguilera'
    },
    {
        categoria: 'Entretenimiento',
        enunciado: 'En Los tres cerditos, ¿de qué está hecha la casa más fuerte?',
        opciones: ['Ladrillos', 'Palos', 'Paja', 'Bambú'],
        respuestaCorrecta: 'Ladrillos'
    },

    //geografia
    {
        categoria: 'Geografia',
        enunciado: '¿Cuál es el animal nacional de Escocia?',
        opciones: ['Caballo', 'Unicornio', 'Lobo', 'Vaca'],
        respuestaCorrecta: 'Unicornio'
    },
    {
        categoria: 'Geografia',
        enunciado: '¿Qué país produce más café en el mundo?',
        opciones: ['Colombia', 'Indonesia', 'Brasil', 'Vietnam'],
        respuestaCorrecta: 'Brasil'
    },
    {
        categoria: 'Geografia',
        enunciado: '¿Cuál es el apodo de la campana del reloj en el Palacio de Westminster en Londres?',
        opciones: ['Big Ben', 'El armadillo', 'La calabaza', 'La momia'],
        respuestaCorrecta: 'Big Ben'
    },
    {
        categoria: 'Geografia',
        enunciado: '¿En qué país esta Praga?',
        opciones: ['España', 'Brasil', 'República Checa', 'Inglaterra'],
        respuestaCorrecta: 'República Checa'
    }
    
];

//230,000