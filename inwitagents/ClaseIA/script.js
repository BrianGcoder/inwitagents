const imagen = document.getElementById("intro-image");
const video = document.getElementById("intro-video");

// Detectar cuando el usuario hace clic
imagen.addEventListener("click", () => {

    // Ocultar la imagen
    imagen.style.display = "none";

    // Mostrar el video
    video.style.display = "block";

    // Reproducir la animación
    video.play();

});

// Detectar cuando termina el video
video.addEventListener("ended", () => {

    // Redireccionar al inicio
    window.location.href = "index.html";

});