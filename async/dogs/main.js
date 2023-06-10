document.body.innerHTML = '<div></div>'
const url = 'https://dog.ceo/api/breeds/image/random'

const dogRandom = async (link) => {
  const res = await fetch(link)
  const data = await res.json();
  const div = document.querySelector('div')
  div.innerHTML = `<h2>Perrito Random</h2>
                   <img src=${data.message} /> 
                   <button>crazy dog</button> 
           
                 `;
div.style.background = 'radial-gradient(#1e90ff 10px, yellow 30%, #1e90ff 50%)';

div.children[2].addEventListener ('click', () => {
  dogRandom(url);
})
const styleImg = document.querySelector('div img')

styleImg.style.width = '500px'
styleImg.style.height = '500px'
styleImg.style.borderRadius = '20px' ;

div.style.display= 'flex'
div.style.flexDirection = 'column'
div.style.gap= '40px'
div.style.alignItems ='center'
div.style.height = '750px'

div.children[2].style.width = '200px'
div.children[2].style.padding = '20px'
div.children[2].style.borderRadius = '20px';  
div.children[2].style.border = 'none'; 


}
dogRandom(url);
