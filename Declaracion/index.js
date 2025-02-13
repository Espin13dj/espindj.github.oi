const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const videoSection = document.querySelector('#videoSection');
const amorVideo = document.querySelector('#amorVideo');
const nameSection = document.querySelector('#nameSection');
const submitNameBtn = document.querySelector('#submitNameBtn');
const nameInput = document.querySelector('#nameInput');
const mensajeSection = document.querySelector('#mensajeSection');

// Al hacer clic en "Sí", mostramos el video y lo reproducimos
yesBtn.addEventListener('click', function () {
    setTimeout(function () {
        videoSection.classList.remove('hidden'); // Mostrar el video
        amorVideo.play(); // Reproducir el video automáticamente
    }, 300); // Retraso de 300ms para dar tiempo al cambio de sección
});

// Cuando el video termine, ocultamos el video y mostramos el formulario
amorVideo.addEventListener('ended', function () {
    videoSection.classList.add('hidden'); // Ocultar el video
    nameSection.classList.remove('hidden'); // Mostrar el formulario de nombre
});

// Cuando se envía el nombre, mostramos un mensaje con el nombre ingresado
submitNameBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    if (name) {
        alert(`¡Gracias, ${name}! Te quiero mucho My heart is yours💖 `); // Mensaje con el nombre ingresado
        nameSection.classList.add('hidden'); // Ocultar el formulario de nombre
        mensajeSection.classList.remove('hidden'); // Mostrar el mensaje
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

// Movimiento del botón "No" (sin cambios)
noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100); // Aleatorio en el eje X
    const randomY = parseInt(Math.random() * 100); // Aleatorio en el eje Y
    noBtn.style.setProperty('top', randomY + '%'); // Posición en el eje Y
    noBtn.style.setProperty('left', randomX + '%'); // Posición en el eje X
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`); // Ajuste para centrado
});
