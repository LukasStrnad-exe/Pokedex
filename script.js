const base_url = "https://pokeapi.co/api/v2/pokemon/";
const PokeDex = [];

async function onload() {
    await loopPushData();
    output();
}

async function loopPushData() {
    for (let i = 1; i < 21; i++) {
        await pushData(i)
    } 
}

async function pushData(path = "") {
    let response = await fetch(base_url + path);
    let responseToJson = await response.json();
    PokeDex.push(responseToJson);
  }

function output() {
    console.log(PokeDex);
}