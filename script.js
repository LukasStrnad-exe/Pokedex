let base_url = "https://pokeapi.co/api/v2/pokemon/";
let PokeSpecies_url = "https://pokeapi.co/api/v2/pokemon-species/";
let PokeDex = [];
let searchPoke = [];
let PokeSpecies = [];
let load = 1;

async function onload() {
  show("loadinButton");
  await loopPushData(1, 21, base_url, PokeDex);
  await loopPushData(1, 21, PokeSpecies_url, PokeSpecies);
  render(0, 20);
  hide("loadinButton");
  renderDetail();
}

async function loadButton() {
  show("loadinButton");
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
  hide("loadinButton");
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
  detailContainer.innerHTML += detailLowerContainerAboutTemplate(pokemon, i);
}

function renderDetailStats(i) {
  let pokemon = PokeDex[i];
  let downDetailRender = document.getElementById("downDetailRender");
  downDetailRender.innerHTML = detailLowerContainerStatsTemplate(pokemon, i);
  setStatsCss(pokemon);
}

function renderDetailEvolution(i) {
  let pokemon = PokeDex[i];
  let downDetailRender = document.getElementById("downDetailRender");
  downDetailRender.innerHTML = detailLowerContainerEvoTemplate(pokemon, i);
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
        ${ability1}
          `;
  }
}

function deleteEggGroup1(pokemonSpecies) {
  let eggGroup0 = pokemonSpecies.egg_groups[1]
    ? pokemonSpecies.egg_groups[1].name
    : "";
  if (eggGroup0 === "") {
    return ``;
  } else {
    return `
        / ${eggGroup0}
          `;
  }
}

function search() {
  let filterword = document.getElementById("filterword").value;
  let length = filterword.length;
  let container = document.getElementById("container");
  if (length === 0) {
    container.innerHTML = ``;
    render(0, PokeDex.length);
    show("loadButton");
  } else if (length > 2) {
    searchPoke = PokeDex.filter((pokemon) => pokemon.name.includes(filterword));
    rendersearch();
  } else {
    alert("It must include at least 3 letter.");
  }
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

function setStatsCss(pokemon) {
  let hp = (100 / 255) * pokemon.stats[0].base_stat;
  let attack = (100 / 255) * pokemon.stats[1].base_stat;
  let defense = (100 / 255) * pokemon.stats[2].base_stat;
  let spattack = (100 / 255) * pokemon.stats[3].base_stat;
  let spdefense = (100 / 255) * pokemon.stats[4].base_stat;
  let speed = (100 / 255) * pokemon.stats[5].base_stat;
  let root = document.documentElement;
  root.style.setProperty("--hp", hp + "%");
  root.style.setProperty("--atk", attack + "%");
  root.style.setProperty("--def", defense + "%");
  root.style.setProperty("--spatk", spattack + "%");
  root.style.setProperty("--spdef", spdefense + "%");
  root.style.setProperty("--spd", speed + "%");
}

function pokemonBackRender(i, id) {
  if (i === PokeDex.length) {
    i = 0;
  } else if (i === -1) {
    i = PokeDex.length - 1;
  }
  if (id === 0) {
    renderDetail(i);
  }
  if (id === 1) {
    renderDetail(i);
    renderDetailStats(i);
  }
  if (id === 2) {
    renderDetail(i);
    renderDetailEvolution(i);
  }
  show("detailinformationBg");
  BgColorType(i, 1, PokeDex);
  BgColorType(i, 2, PokeDex);
}

const inputField = document.getElementById("filterword");
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
