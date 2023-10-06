const fecha = new Date();

const opciones = { month: "long" };
const nombreMes = fecha.toLocaleDateString(undefined, opciones);
console.log(nombreMes);

const nombreDia = fecha.toLocaleDateString(undefined, { weekday: "long" });
console.log(nombreDia);
