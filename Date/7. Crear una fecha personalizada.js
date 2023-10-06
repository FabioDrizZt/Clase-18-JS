const fecha = new Date();

// Obtener el año, mes, día, hora, minutos, segundos y milisegundos
fecha.setFullYear(2024);
fecha.setMonth(1); // Meses van de 0 a 11
fecha.setDate(2);
fecha.setHours(12);
fecha.setMinutes(13);
fecha.setSeconds(14);
fecha.setMilliseconds(15);

console.log(`Fecha a partir de componentes específicos: ${fecha}`);
