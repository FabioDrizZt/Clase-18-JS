async function fetchData() {
  try {
    const response = await fetch("https://api.covid19india.org/data.json");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
