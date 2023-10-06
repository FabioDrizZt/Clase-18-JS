const fecha1 = new Date("2023-10-01");
const fecha2 = new Date("2023-10-05");

// calcular la diferencia en milisegundos
const diferencia = fecha2 - fecha1;

const diferenciaEnDias = diferencia / (1000 * 60 * 60 * 24);

console.log(`La diferencia en milisegundos entre las fechas es: ${diferencia}`);
console.log(`La diferencia en dias entre las fechas es: ${diferenciaEnDias}`);
