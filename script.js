// Número mágico entre 1 y 100
const numeroMagico = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 10;
// Obtener elementos del DOM
const caja = document.getElementById('caja');
const boton = document.getElementById('boton');
const intentosContainer = document.getElementById('intentos');
const mensajeContainer = document.getElementById('mensaje');
const restoContainer = document.getElementById('resto');
// Manejar el intento
function manejarIntento() {
    const intento = parseInt(caja.value);
    if (isNaN(intento) || intento < 1 || intento > 100) {
        mensajeContainer.textContent = "Introduce un número entre 1 y 100.";
        return;
    }
    intentos++;
    const intentosRestantes = maxIntentos - intentos;
    // Mostrar el intento
    const intentoTexto = document.createElement('p');
    intentoTexto.textContent = `Intento ${intentos}: ${intento}`; // Agrega el intento al contenedor
    intentosContainer.appendChild(intentoTexto);
    // Verifica si es correcto
    if (intento === numeroMagico) {
        mensajeContainer.textContent = `¡Ganaste! El número era ${numeroMagico}.`;
        boton.disabled = true; // Desactiva el botón porque se gano el juego
    } else {
        mensajeContainer.textContent = intento < numeroMagico ? "Es mayor." : "Es menor.";
        restoContainer.textContent = `Te quedan ${intentosRestantes} intentos.`;
        if (intentos >= maxIntentos) {
            mensajeContainer.textContent = `Perdiste. El número era ${numeroMagico}.`;
            boton.disabled = true;
        }
    }
}
// Evento al hacer clic en el botón
boton.addEventListener('click', manejarIntento);

