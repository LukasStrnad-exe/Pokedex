let base_url = "https://pokeapi.co/api/v2/pokemon/";
let PokeSpecies_url = "https://pokeapi.co/api/v2/pokemon-species/";
let PokeDex = [];
let searchPoke = [];
let PokeSpecies = [];
let load = 1;

async function onload() {
  await loopPushData(1, 21, base_url, PokeDex);
  await loopPushData(1, 21, PokeSpecies_url, PokeSpecies);
  render(0, 20);
  renderDetail();
}

async function loadButton() {
  hide("loadButton");
  x = 20 * load;
  y = 0 + x;
  z = 20 + x;
  yLoop = y + 1;
  zLoop = z + 1;
  load++;
  await loopPushData(yLoop, zLoop, base_url, PokeDex);
  await loopPushData(yLoop, zLoop, PokeSpecies_url, PokeSpecies);
  render(y, z);
  show("loadButton");
}

async function loopPushData(y, z, url, array) {
  for (let i = y; i < z; i++) {
    await pushData(i, url, array);
  }
}

async function pushData(path = "", url, array) {
  let response = await fetch(url + path);
  let responseToJson = await response.json();
  array.push(responseToJson);
}

function render(y, z) {
  let container = document.getElementById("container");
  for (let i = y; i < z; i++) {
    let pokemon = PokeDex[i];
    container.innerHTML += containerTemplate(pokemon, i);
    BgColorType(i, 0, PokeDex);
  }
}

function renderDetail(i) {
  let pokemon = PokeDex[i];
  let detailContainer = document.getElementById("detailinformation");
  detailContainer.innerHTML = detailUpperContainerTemplate(pokemon, i);
  detailContainer.innerHTML += detailLowerContainerTemplate(pokemon, i);
}

function displaytype1(pokemon) {
  let type1 = pokemon.types[1] ? pokemon.types[1].type.name : "";
  return type1;
}

function deletetype1(pokemon, i, id) {
  let type1 = pokemon.types[1] ? pokemon.types[1].type.name : "";
  if (type1 === "") {
    return ``;
  } else {
    return `
            <div class="pokemon_1_element" id="type1${id}${i}">${type1}</div>
        `;
  }
}

function deleteAbility1(pokemon) {
  let ability1 = pokemon.abilities[1] ? pokemon.abilities[1].ability.name : "";
  if (ability1 === "") {
    return ``;
  } else {
    return `
        / ${ability1}
          `;
  }
}

function search() {
  let filterword = document.getElementById("filterword").value;
  searchPoke = PokeDex.filter((pokemon) => pokemon.name.includes(filterword));
  console.log(searchPoke);

  rendersearch();
}

function rendersearch() {
  hide("loadButton");
  container.innerHTML = ``;
  for (let i = 0; i < searchPoke.length; i++) {
    let pokemon = searchPoke[i];
    let container = document.getElementById("container");
    container.innerHTML += containerTemplate(pokemon, i);
    BgColorType(i, 0, searchPoke);
  }
}

function hide(id) {
  document.getElementById(id).classList.add("d-none");
}

function show(id) {
  document.getElementById(id).classList.remove("d-none");
}
