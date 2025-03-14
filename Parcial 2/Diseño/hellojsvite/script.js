window.onload = function() {
    document.getElementById('btn-noticia1').addEventListener('click', function() {
        const descripcion1 = "🎮 Un nuevo RPG de mundo abierto ha llegado, con un sistema de exploración revolucionario y gráficos impresionantes. ¿Será el mejor juego del año?";
        document.getElementById('descripcion-noticia').textContent = descripcion1;
    });

    document.getElementById('btn-noticia2').addEventListener('click', function() {
        const descripcion2 = "🔥 Xbox y PlayStation han anunciado una colaboración histórica, trabajando juntos en un proyecto secreto que podría cambiar el futuro de los videojuegos.";
        document.getElementById('descripcion-noticia').textContent = descripcion2;
    });

    document.getElementById('btn-noticia3').addEventListener('click', function() {
        const descripcion3 = "💾 Steam ha lanzado su esperada Summer Sale, con descuentos de hasta el 80% en juegos populares. ¡No te lo pierdas!";
        document.getElementById('descripcion-noticia').textContent = descripcion3;
    });
}
