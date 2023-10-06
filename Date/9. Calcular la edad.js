function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  if (
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate)
  ) {
    edad--;
  }
  return edad;
}

const fechaNacimiento = "1988-12-16";
const edad = calcularEdad(fechaNacimiento);
console.log(`su edad es: ${edad}`);
