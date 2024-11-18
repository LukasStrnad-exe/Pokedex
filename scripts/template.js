function containerTemplate(pokemon, i) {
  let sprite = pokemon.sprites.front_default;
  let id = pokemon.id;
  let name = pokemon.name;
  let type0 = pokemon.types[0].type.name;
  return `
        <div class="pokemon_card" onclick="show('detailinformationBg')">
            <div class="pokemon_img">
                <img src="${sprite}" alt="${name}" />
            </div>
            <div class="pokemon_nr">
                <p>${id}#</p>
            </div>
            <div class="pokemon_name">
                <h3>${name}</h3>
            </div>
            <div class="pokemon_elements">
                <div class="pokemon_0_element" id="type0${i}">${type0}</div>
                ${deletetype1(pokemon, i)}
            </div>
        </div>
        `;
}
