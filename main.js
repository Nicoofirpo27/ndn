// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//  número máximo de intentos permitidos
const maxIntentos = 7;
let intentos = 0;

// Función para iniciar el juego
function iniciarJuego() {
  alert("¡Bienvenido al juego de adivinanzas!");

  // Ciclo para controlar los intentos del usuario
  while (intentos < maxIntentos) {
    // Solicitar al usuario que ingrese un número
    const numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 100:"));

    // Validar si el número ingresado es válido
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
      alert("Ingresa un número válido.");
      continue;
    }

    // Incrementar el contador de intentos
    intentos++;

    // Verificar si el número ingresado es el número aleatorio
    if (numeroIngresado === numeroAleatorio) {
      alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
      break;
    } else if (numeroIngresado < numeroAleatorio) {
      alert("El número que ingresaste es demasiado bajo.");
    } else {
      alert("El número que ingresaste es demasiado alto.");
    }
  }

  // Verificar si el usuario no adivinó el número en los intentos permitidos
  if (intentos === maxIntentos) {
    alert(`Se te acabaron los intentos. El número era ${numeroAleatorio}. ¡Inténtalo de nuevo!`);
  }
}

// Llamar a la función para iniciar el juego
boton
iniciarJuego();