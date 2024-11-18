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

function detailContainerTemplate() {
  return `
              <div class="detailinformation_upper_half">
            <div class="wrapper">
              <div class="detail_name">
                <h2>bulbasauer</h2>
                <img
                  src="assets/icons/kreuz.png"
                  alt="zurück"
                  onclick="hide('detailinformationBg')"
                />
              </div>
              <div class="detail_sprite">
                <img src="assets/img/logo.png" alt="" />
              </div>
              <div class="detail_type">
                <div class="pokemon_elements">
                  <div class="pokemon_0_element" id="type0">fire</div>
                  <div class="pokemon_0_element" id="type1">fire</div>
                </div>
                <p>1#</p>
              </div>
            </div>
          </div>
          <div class="detailinformation_lower_half">
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
                      Species <br />
                      Height <br />
                      Weight <br />
                      Abilities <br />
                    </b>
                  </div>
                  <div class="detail_value">
                    seed <br />
                    4,6 m <br />
                    2 kg <br />
                    Overgrow, Chlorophyl <br />
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
