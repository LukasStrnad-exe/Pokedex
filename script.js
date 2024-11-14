const base_url = "https://pokeapi.co/api/v2/pokemon/";
const PokeDex = [];

async function onload() {
    await loopPushData();
    render();
}

async function loopPushData() {
    for (let i = 650; i < 700; i++) {
        await pushData(i)
    } 
}

async function pushData(path = "") {
    let response = await fetch(base_url + path);
    let responseToJson = await response.json();
    PokeDex.push(responseToJson);
}

function render() {
    for (let i = 0; i < PokeDex.length; i++) {
        const pokemon = PokeDex[i];
        let container = document.getElementById('container');
        container.innerHTML += containerTemplate(pokemon,i);
        BgColorType(pokemon,i)
    }
}

function displaytype1(pokemon){
    let type1 = pokemon.types[1] ? pokemon.types[1].type.name : '';
    return type1;
}

function deletetype1(pokemon, i) {
    let type1 = pokemon.types[1] ? pokemon.types[1].type.name : '';
    if (type1 === "") {
        return ``;
    } else {
        return `
            <div class="pokemon_1_element" id="type1${i}">${type1}</div>
        `;
    }
}