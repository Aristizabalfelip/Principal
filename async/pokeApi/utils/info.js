const url = window.location.search;
const search = new URLSearchParams(url);
const id = search.get('id')
const link = `https://pokeapi.co/api/v2/pokemon/${id}`
const section = document.querySelector('section')

const getPokemon = async(l) => {
    const res = await fetch(l)
    const data = await res.json();
    paintInfoPoke(data)
}
getPokemon(link);

const paintInfoPoke = (info) =>  {
    const container = document.createElement("div");
    container.innerHTML = `<div>
                      <img src=${info.sprites.front_default} />
                      <img src=${info.sprites.back_default} />
                     </div>
                     <div>
                      <p>Name: ${info.name}</p>
                      <p>Id: ${info.id}</p>
                      <p>Height: ${info.height}</p>
                      <h4>Ability: ${info.abilities[0].ability.name}</h4>
                      <h4>Hidden ability: ${info.abilities[1].ability.name}</h4>
                      <h5>POWER: ${info.base_experience}</h5>
                     </div>   `;
                     console.log(container);
section.append(container);
}