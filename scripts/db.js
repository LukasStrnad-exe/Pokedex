let allPkms = [];

const base_url = "https://pokeapi.co/api/v2/pokemon/";

function onload() {
  console.log("test");
}

async function loadData(path = "") {
  let response = await fetch(base_url + path + ".json");
  let responseToJson = await response.json();
  console.log(responseToJson);
}
