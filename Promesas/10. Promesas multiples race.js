const miPromesa1 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.3) resolve("Promesa 1 cumplida 😎");
      else reject("Algo salio mal en promesa 1.. 😢");
    }, 2000);
  });
};

const miPromesa2 = () => {
  return new Promise(function (resolve, reject) {
    // ... código asíncrono ...
    setTimeout(function () {
      if (Math.random() < 0.3) resolve("Promesa 2 cumplida 😎");
      else reject("Algo salio mal en promesa 2.. 😢");
    }, 3000);
  });
};

Promise.race([miPromesa1(), miPromesa2()])
  .then((resultado) => {
    //La promesa mas rapida y mas veloz que se complete se mostrará
    console.log(resultado);
  })
  .catch((error) => {
    //La promesa mas rapida y mas veloz en fallar se muestra
    console.error(error);
  });
