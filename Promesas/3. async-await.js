const miPromesa = new Promise(function (resolve, reject) {
  // ... código asíncrono ...
  setTimeout(function () {
    if (Math.random() < 0.4) resolve("Promesa cumplida");
    else reject("Algo salio mal.. 😢");
  }, 2000);
});

async function miFuncion() {
  try {
    const resultado = await miPromesa; // Promesa pendiente
    console.log(resultado); // Promesa Fulfilled
  } catch (err) {
    console.log(err); // Promesa Rejected Maneja errores si la promesa es rechazada
  }
}

miFuncion();
