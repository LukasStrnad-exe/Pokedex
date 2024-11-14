const base_url = "https://pokeapi.co/api/v2/pokemon/";

const PokeDex = [];

async function onload() {
    await test();
    output();
}

async function test() {
    for (let i = 1; i < 21; i++) {
        await loadData(i)
    } 
}

async function loadData(path = "") {
    let response = await fetch(base_url + path);
    let responseToJson = await response.json();
    PokeDex.push(responseToJson);
  }

function output() {
    console.log(PokeDex);
}