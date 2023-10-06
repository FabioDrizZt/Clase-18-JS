operacionAsincrona1(function () {
  //ejecuta cosas de la operacion asincrona 1
  operacionAsincrona2(function () {
    //ejecuta cosas de la operacion asincrona 2
    operacionAsincrona3(function () {
      //ejecuta cosas de la operacion asincrona 3
    });
  });
});

operacionAsincrona1()
  .then((resultado1) => {
    return operacionAsincrona2(resultado1);
  })
  .then((resultado2) => {
    return operacionAsincrona3(resultado2);
  })
  .then((resultado3) => {
    // Hacemos algo con ese resultado3 final
  })
  .catch((error) => {
    console.error(error);
  });

const verifyUser = function (username, password, callback) {
  dataBase.verifyUser(username, password, (error, userInfo) => {
    if (error) {
      callback(error);
    } else {
      dataBase.getRoles(username, (error, roles) => {
        if (error) {
          callback(error);
        } else {
          dataBase.logAccess(username, (error) => {
            if (error) {
              callback(error);
            } else {
              callback(null, userInfo, roles);
            }
          });
        }
      });
    }
  });
};

const verifyUser = function (username, password) {
  database
    .verifyUser(username, password)
    .then((userInfo) => dataBase.getRoles(userInfo))
    .then((rolesInfo) => dataBase.logAccess(rolesInfo))
    .then((finalResult) => {
      //do whatever the 'callback' would do
    })
    .catch((err) => {
      //do whatever the error handler needs
    });
};