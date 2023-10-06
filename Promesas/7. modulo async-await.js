const miModulo = (function () {
  async function fetchDataCovid() {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const data = response.json();
      return data;
    } catch (err) {
      throw new Error("error al traer los datos");
    }
  }

  async function fetchDataProvincias() {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const data = response.json();
      return data;
    } catch (err) {
      throw new Error("error al traer los datos");
    }
  }
  return {
    obtenerDatosCovid: fetchData,
    obtenerDatosProvincias: fetchDataProvincias,
  };
})();

miModulo
  .obtenerDatosCovid()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
