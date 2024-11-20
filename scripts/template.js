function containerTemplate(pokemon, i) {
  let sprite = pokemon.sprites.front_default;
  let id = pokemon.id;
  let name = pokemon.name;
  let type0 = pokemon.types[0].type.name;
  return `
        <div class="pokemon_card" onclick="renderDetail(${i}), show('detailinformationBg'), BgColorType(${i}, 1, PokeDex), BgColorType(${i}, 2, PokeDex)">
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
                <div class="pokemon_0_element" id="type00${i}">${type0}</div>
                ${deletetype1(pokemon, i, 0)}
            </div>
        </div>
        `;
}

function detailUpperContainerTemplate(pokemon, i) {
  let sprite = pokemon.sprites.other.showdown.front_default;
  let name = pokemon.name;
  let type0 = pokemon.types[0].type.name;
  let id = pokemon.id;
  return `
    <div class="detailinformation_upper_half">
      <div class="wrapper">
        <div class="detail_name">
          <h2>${name}</h2>
          <img
            src="assets/icons/kreuz.png"
            alt="zurück"
            onclick="hide('detailinformationBg')"
          />
        </div>
        <div class="detail_sprite">
          <img src="${sprite}" alt="${name}" />
        </div>
        <div class="detail_type">
          <div class="pokemon_elements">
            <div class="pokemon_0_element" id="type01${i}">${type0}</div>
            ${deletetype1(pokemon, i, 1)}
          </div>
          <p>${id}#</p>
        </div>
      </div>
    </div>
  `;
}

function detailLowerContainerTemplate(pokemon, i) {
  height = pokemon.height / 10;
  weight = pokemon.weight / 10;
  ability0 = pokemon.abilities[0].ability.name;
  return `
    <div class="detailinformation_lower_half" id="type02${i}">
      <div class="wrapper">
        <div class="detail_menu">
          <p><b>about</b></p>
          <p>stats</p>
          <p>evolution</p>
        </div>
        <div class="detail_container">
          <div class="detail_pack">
            <div class="detail_keys">
              <b>
                Height <br />
                Weight <br />
                Abilities <br />
              </b>
            </div>
            <div class="detail_value">
              ${height} m <br />
              ${weight} kg <br />
              ${ability0}${deleteAbility1(pokemon)} <br />
            </div>
          </div>
          <h3>Breeding</h3>
          <div class="breeding">
            <div class="detail_breeding_keys">
              <b>
                Gender <br />
                Egg Group <br />
                Egg Cycle <br />
              </b>
            </div>
            <div class="detail_breeding_value">
              <img src="assets/icons/mannliches.png" alt="mänlich" />
              50%
              <img src="assets/icons/weiblich.png" alt="weiblich" />
              50% <br />
              Monster <br />
              Grass <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
