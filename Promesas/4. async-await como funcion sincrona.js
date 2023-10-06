const miPromesa = new Promise(function (resolve, reject) {
  // ... código asíncrono ...
  setTimeout(function () {
    resolve("Promesa cumplida");
  }, 2000);
});

async function miFuncion() {
  console.log("inicio");
  console.log(await miPromesa);
  console.log("fin");
}

miFuncion();
