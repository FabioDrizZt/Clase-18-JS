const miPromesa = new Promise(function (resolve, reject) {
  // ... código asíncrono ...
  setTimeout(function () {
    if (Math.random() < 0.4) resolve("Promesa cumplida 😎");
    else reject("Algo salio mal.. 😢");
  }, 2000);
});

miPromesa
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (err) {
    console.log(err);
  });
