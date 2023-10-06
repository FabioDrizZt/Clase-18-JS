// Tiempo máximo de inactividad en milisegundos (por ejemplo, 5 minutos)
const tiempoInactividad = 5 * 60 * 1000; // 5 minutos en milisegundos

// Variable para almacenar la hora de la última interacción del usuario
let ultimaInteraccion = new Date();

// Función para comprobar la inactividad y cerrar la sesión si es necesario
function verificarInactividad() {
  const ahora = new Date();
  const tiempoTranscurrido = ahora - ultimaInteraccion;

  if (tiempoTranscurrido > tiempoInactividad) {
    // Si ha pasado el tiempo máximo de inactividad, cierra la sesión
    cerrarSesion();
  } else {
    // Si no ha pasado el tiempo máximo de inactividad, sigue verificando
    // la inactividad después de un cierto intervalo (por ejemplo, 1 segundo)
    setTimeout(verificarInactividad, 1 * 60 * 1000); // Verifica la inactividad cada minuto
  }
}

// Función para reiniciar el temporizador de inactividad cuando el usuario interactúa
function reiniciarTemporizador() {
  ultimaInteraccion = new Date();
}

// Función para cerrar la sesión del usuario
function cerrarSesion() {
  // Implementa aquí la lógica para cerrar la sesión del usuario,
  // como eliminar tokens de sesión, redirigir a la página de inicio de sesión, etc.
  console.log("Sesión cerrada debido a inactividad");
}

// Evento para detectar la interacción del usuario (por ejemplo, clic, tecla presionada, etc.)
document.addEventListener("click", reiniciarTemporizador);
document.addEventListener("keydown", reiniciarTemporizador);

// Comienza a verificar la inactividad
verificarInactividad();
