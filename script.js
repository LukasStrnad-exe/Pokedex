let base_url = "https://pokeapi.co/api/v2/pokemon/";
let PokeDex = [];
let load = 1;

async function onload() {
  await loopPushData(1, 21);
  render(0, 20);
}

async function loadButton() {
  x = 20 * load;
  y = 0 + x;
  z = 20 + x;
  yLoop = y + 1;
  zLoop = z + 1;
  load++;
  await loopPushData(yLoop, zLoop);
  render(y, z);
}

async function loopPushData(y, z) {
  for (let i = y; i < z; i++) {
    await pushData(i);
  }
}

async function pushData(path = "") {
  let response = await fetch(base_url + path);
  let responseToJson = await response.json();
  PokeDex.push(responseToJson);
}

function render(y, z) {
  for (let i = y; i < z; i++) {
    let pokemon = PokeDex[i];
    let container = document.getElementById("container");
    container.innerHTML += containerTemplate(pokemon, i);
    BgColorType(pokemon, i);
  }
}

function displaytype1(pokemon) {
  let type1 = pokemon.types[1] ? pokemon.types[1].type.name : "";
  return type1;
}

function deletetype1(pokemon, i) {
  let type1 = pokemon.types[1] ? pokemon.types[1].type.name : "";
  if (type1 === "") {
    return ``;
  } else {
    return `
            <div class="pokemon_1_element" id="type1${i}">${type1}</div>
        `;
  }
}
