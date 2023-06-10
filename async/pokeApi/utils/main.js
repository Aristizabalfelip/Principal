const url = 'https://pokeapi.co/api/v2/pokemon/'
document.body.style.display = 'flex';
document.body.style.flexDirection='column';
document.body.style.gap = '15px';

const section = document.querySelector('section')

const getPersonages = async (link) => {
    const res = await fetch(link)
    const data = await res.json();

    const imgPokemons = async (images) => {
        const res = await fetch(images)
        const data = await res.json();
        const div = document.createElement("div");
        div.innerHTML = `<span>${data.id}</span>
                         <h3>${data.name}</h3>
                         <img src=${data.sprites.front_default} />
                         <a href="./pages/info.html?id=${data.id}"><button >More info </button></a>
                         <button onclick="savePokemon('${data.id}','${data.name}','${data.sprites.front_default}')">Buy</button>
                        
                        `;
        section.append(div);
    }

    for (let i = 0; i < data.results.length; i++) {
        await imgPokemons(data.results[i].url)
    }

}
getPersonages(url);


const savePokemon = (id, name, img) => {
    const dataObject = {
        id,
        name,
        img
    }
    console.log(dataObject);
    
    const getPokemons = JSON.parse(localStorage.getItem('Pokemons'))

  if (getPokemons) {
    getPokemons.push(dataObject)
      localStorage.setItem('Pokemons', JSON.stringify(getPokemons))
  }
  else {
      localStorage.setItem('Pokemons', JSON.stringify([dataObject]))
  }
  
}