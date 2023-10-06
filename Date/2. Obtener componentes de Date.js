const fecha = new Date();

// Obtener el año, mes, día, hora, minutos, segundos y milisegundos
const año = fecha.getFullYear();
const mes = fecha.getMonth(); // Meses van de 0 a 11
const dia = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();
const milisegundos = fecha.getMilliseconds();

console.log(`Fecha: ${dia}/${mes + 1}/${año}`);
console.log(`Hora: ${hora}:${minutos}:${segundos}`);
