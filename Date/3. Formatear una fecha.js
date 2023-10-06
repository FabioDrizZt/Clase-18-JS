const fecha = new Date();

const opciones = { year: "numeric", day: "2-digit", month: "2-digit" };
const fechaFormateada = fecha.toLocaleDateString(undefined, opciones);

console.log(fechaFormateada);
