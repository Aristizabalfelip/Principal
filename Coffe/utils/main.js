const contaninersCoffe = document.querySelectorAll('.ContBag section')
const contaninersCoffeImg = document.querySelectorAll('.ContBag section img')
const contaninersCoffeIName = document.querySelectorAll('.Lu')
const contaninersCoffeIPrice = document.querySelectorAll('.Pri')
const buttonBuy = document.querySelectorAll('.ContBag section button')



contaninersCoffe.forEach((ele, i) => { 
  
   // console.log(ele.children[1].children[1].innerText); traer los elementos para crear el objeto

   buttonBuy[i].addEventListener('click', (e) => {
      e.preventDefault();
   
      const dataCoffeBuy = {
         img: ele.children[0].currentSrc,
         name: ele.children[1].children[0].innerText,
         price:ele.children[1].children[1].innerText,
         cantidad: 5
      }
      console.log(dataCoffeBuy);
    
      	const getCoffeBought = JSON.parse(localStorage.getItem('CoffeeBought'))

		if (getCoffeBought) {
			getCoffeBought.push(dataCoffeBuy)
			localStorage.setItem('CoffeeBought', JSON.stringify(getCoffeBought))
		}
		else {
			localStorage.setItem('CoffeeBought', JSON.stringify([dataCoffeBuy]))
		}

   })
})






















// contaninersCoffe.forEach((coffe, i) => {
//     const newSection = document.createElement("section");
//     newSection.innerHTML = `<img src=${contaninersCoffeImg[i].getAttribute('src')} />
//                              <div>
//                                 <span>${contaninersCoffeIName[i].textContent}</span>
//                                 <span>${contaninersCoffeIPrice[i].textContent}</span>
//                              </div>
//                             `;
//                             console.log(newSection);

//                 // cartContainer.append( newSection);
// })




// e.addEventListener('submit', (element) => {
//     element.preventDefault();

//     const info = {
//         id: pokemons[i].id,
//         img : pokemons[i].img,
//         name: pokemons[i].name
//     }

// getLabel.forEach((e, i) => {



// contaninersCoffe.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
// })