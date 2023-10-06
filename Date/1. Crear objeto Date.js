const fechaActual = new Date();
console.log(fechaActual.toLocaleDateString());

const fechaEspecifica = new Date(2021, 10, 1); //meses en js van de 0 a 11 (0=enero y 11=diciembre)
console.log(fechaEspecifica);

const fechaDesdeString = new Date("2023-12-16");
console.log(fechaDesdeString);
