document.addEventListener("DOMContentLoaded", function () {
    let noticias = document.querySelectorAll(".noticia");

    noticias.forEach(noticia => {
        noticia.addEventListener("click", function () {
            alert(`Has seleccionado la noticia: ${this.querySelector("h3").innerText}`);
        });
    });
});
