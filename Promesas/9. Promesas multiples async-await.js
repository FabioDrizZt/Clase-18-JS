const miPromesa1 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.8) resolve("Promesa 1 cumplida 😎");
      else reject("Algo salio mal en promesa 1.. 😢");
    }, 2000);
  });
};

const miPromesa2 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.8) resolve("Promesa 2 cumplida 😎");
      else reject("Algo salio mal en promesa 2.. 😢");
    }, 2000);
  });
};

async function traerDatos() {
  try {
    const [resultado1, resultado2] = await Promise.all([
      miPromesa1(),
      miPromesa2(),
    ]);
    console.log(resultado1, resultado2);
  } catch (error) {
    console.error(error.message);
  }
}

traerDatos();
