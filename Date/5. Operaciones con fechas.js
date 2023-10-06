const fecha = new Date();

// añadir días a la fecha actual
fecha.setDate(fecha.getDate() + 7);
console.log(`Fecha despues de una semana: ${fecha}`);

// restar días a la fecha actual
fecha.setDate(fecha.getDate() - 14);
console.log(`Fecha una semana atras: ${fecha}`);

const otraFecha = new Date("2023-10-11");
if (fecha > otraFecha) {
  console.log("La fecha actual es posterior a la otra fecha");
} else if (fecha < otraFecha) {
  console.log("La fecha actual es anterior a la otra fecha");
} else {
  console.log("las fechas son iguales");
}
