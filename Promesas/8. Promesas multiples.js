const miPromesa1 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.4) resolve("Promesa 1 cumplida 😎");
      else reject("Algo salio mal en promesa 1.. 😢");
    }, 2000);
  });
};

const miPromesa2 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.4) resolve("Promesa 2 cumplida 😎");
      else reject("Algo salio mal en promesa 2.. 😢");
    }, 2000);
  });
};

Promise.all([miPromesa1(), miPromesa2()])
  .then((resultados) => {
    console.log("todas las promesas completadas: ", resultados);
  })
  .catch((err) => {
    console.error("fallo la operacion en: ", err);
  });
