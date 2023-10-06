const fecha = new Date();

const hora12hsArg = fecha.toLocaleDateString("es-AR", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "America/Buenos_Aires",
});

console.log(`Hora en formato de 12 horas para Argentina: ${hora12hsArg}`);
