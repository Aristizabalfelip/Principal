const containerBuy = document.querySelector('#containerOfBuy')
containerBuy.style.display = 'flex'
containerBuy.style.flexDirection = 'column'
containerBuy.style.gap = '24px'



const arrayLocal = JSON.parse(localStorage.getItem('CoffeeBought'));

arrayLocal.forEach(coffes => {
    const div = document.createElement("div");
    const hr = document.createElement("hr");

    div.innerHTML = `<div class="divButtons"> 
                        <button><img src="../assets/vecSub.jpg" alt=""></button>
                        <p>${1}</p>
                        <button><img src="../assets/vecSum.png" alt=""></button>
                     </div>
                    <img src=${coffes.img} />
                    <div> 
                        <p>${coffes.name}</p>
                        <p>Paquete de café, 250 gr</p>         
                    </div>
                    <span>${coffes.price}</span>
                      `;

   containerBuy.append(div);
   containerBuy.append(hr);
});

const divsStyle = document.querySelectorAll('#containerOfBuy> div')
const divsSum = document.querySelectorAll('.divButtons')
const imgAll = document.querySelectorAll('#containerOfBuy img')


divsStyle.forEach(containers => {
    containers.style.display = 'flex'
    containers.style.gap = '24px'
    containers.style.justifyContent =' space-between';
});

divsSum.forEach(divs => {
    divs.style.display = 'flex'
    divs.style.width = '88px';
});

const coffeeDivs = document.querySelectorAll('#containerOfBuy> div') 



coffeeDivs.forEach(sum => {

    sum.children[0].children[2].addEventListener("click", (e) => {
    e.preventDefault();

    add(arrayLocal,sum.children[2].children[0].textContent,sum.children[3].textContent,true)
   

   })
})



const add = (array,name,price, boolean) => {
   
    const obj = {
        name,
        price ,
        jobDone : boolean,
        cantidad : 1
    }


    for (let i = 0; i < array.length; i++) {
  
        if(array[i].name === obj.name){
            array[i].cantidad++
            
             return array
        }
    }

    array.push(obj)
    return array
   
}



