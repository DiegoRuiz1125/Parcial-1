function mostrarMensaje() 
{
    const frases =
     [
        "El próximo nivel siempre está a un paso de distancia. ¡Sigue jugando!",
"Cada misión tiene su desafío, pero también su recompensa.",
"No importa cuántas veces pierdas, lo importante es volver a intentarlo.",
"Los mejores jugadores no nacen, se entrenan.",
"Tu historia gamer aún está en desarrollo. ¡Sigue explorando!",
"Un buen juego no tiene fin, solo nuevos desafíos por descubrir.",
"Guarda tu progreso, pero nunca tu pasión por jugar.",
"En los videojuegos, como en la vida, siempre hay un 'respawn' para volver a intentarlo.",
"Juega con estrategia, pero nunca dejes de divertirte.",
"Los videojuegos nos enseñan que hasta los jefes más difíciles pueden ser vencidos."
    ];

    // Escoge una frase aleatoria
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

    // Muestra la frase en la página
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = fraseAleatoria;

    // También lo mostramos en la consola
    console.log(`Frase motivadora: "${fraseAleatoria}"`);
}