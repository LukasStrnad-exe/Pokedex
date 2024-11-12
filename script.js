function onload() {
    console.log("test");
    loadData("/21");
  }
  
  const base_url =
    "https://pokeapi.co/api/v2/pokemon/";
  
  async function loadData(path = "", subPath) {
    let response = await fetch(base_url + path);
    let responseToJson = await response.json();
    console.log(responseToJson);
  }