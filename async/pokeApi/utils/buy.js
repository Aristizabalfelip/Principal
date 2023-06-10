const section = document.querySelector('section')

const paint = () => {
    const primer = JSON.parse(localStorage.getItem('Pokemons'));
    section.innerHTML = ''
    primer.forEach(element => {

        const div = document.createElement("div");
        
       div.innerHTML += `<span>${element.id}</span>
                         <h3>${element.name}</h3>
                         <img src=${element.img} />
                         <button onclick= deletePokemon('${element.id}')>Delete</button>
                        `;
        section.append(div);
    });

}
paint();

const deletePokemon = (id) => {
    const buyLocal = JSON.parse(localStorage.getItem('Pokemons'));

    const filterArray = buyLocal.filter(poke => {
        if (poke.id !== id) {
            return true
        }
        return false

    });
    localStorage.setItem('Pokemons', JSON.stringify(filterArray))
    paint()
}


