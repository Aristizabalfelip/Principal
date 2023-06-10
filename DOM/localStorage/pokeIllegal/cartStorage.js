document.body.style.backgroundColor = "#1c1c1c"
const getDiv = document.querySelector('#getPokemons')
getDiv.style.display = 'flex'
getDiv.style.flexWrap = 'wrap';
getDiv.style.gap = '54px'

const imgPikachu = document.querySelector('a >img')
imgPikachu.style.width = '45px'


window.addEventListener("load", (e) => {
    e.preventDefault();

    const primer = JSON.parse(localStorage.getItem('Pokemon'))

    if (primer) {

        primer.forEach((element, i) => {

            const contenedores = document.createElement('div');
            contenedores.id = i + 1;
            getDiv.appendChild(contenedores);

            const imagen = document.createElement('img');
            const nombre = document.createElement('label');
            const deletePoke = document.createElement('button');
            imagen.src = element.img;
            nombre.textContent = element.name;
            deletePoke.textContent = 'Delete';
            contenedores.appendChild(imagen);
            contenedores.appendChild(nombre)
            contenedores.appendChild(deletePoke);

            contenedores.style.display = 'flex'
            contenedores.style.flexDirection = 'column'
            contenedores.style.gap = '20px'
            contenedores.style.width = '200px'
            contenedores.style.height = '250px'
            contenedores.style.textAlign = 'center'
            contenedores.style.background = 'radial-gradient(red 10px, yellow 30%, #1e90ff 50%)';

            deletePoke.style.background = 'none';
            deletePoke.style.padding = '7px';
            deletePoke.style.border = 'solid 1px'
            deletePoke.style.borderRadius = '8px'
            deletePoke.style.borderColor = '#1e90ff'
            deletePoke.style.color = 'red'

          

            deletePoke.addEventListener("click", (ele) => {
                ele.preventDefault();
                console.log(primer[i]);
                   const obje = primer[i];
                   localStorage.removeItem(obje);         

            });

            localStorage.removeItem(primer);

        });

    } else {
        const divCry = document.createElement('div');
        getDiv.appendChild(divCry);

        const Gap = document.createElement('label');
        Gap.textContent = 'Tu pokecarrito aún se encuentra vacío';
        const imagenCry = document.createElement('img');
        imagenCry.src = "./2x/cry-pokemon.gif";
        divCry.appendChild(Gap);
        divCry.appendChild(imagenCry);
        imagenCry.style.width = '100px'
        divCry.style.display = 'flex'
        divCry.style.flexDirection = 'column-reverse'
        divCry.style.gap ='20px'
        Gap.style.color = 'red'


    }



})

