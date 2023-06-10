const getSection = document.querySelector('section');
const createButtoms = (b) => {
for (let i = 0; i < 100; i++) {
  
 const button = document.createElement('button');
 button.textContent =  (i + 1);
 b.appendChild(button);
 button.style.width = '40px'
 button.style.height = '40px'


 if ((i+1) % 5 == 0) {
  button.style.color = 'green';
}
 if (i % 2 !== 0) {
  button.style.backgroundColor = '#87CEFA';
} else {
  button.style.backgroundColor = '#d95030';
}

}
}
createButtoms(getSection);


getSection.style.display = 'flex'
getSection.style.flexWrap = 'wrap'
getSection.style.gap = '5px'


const getButtons = document.querySelectorAll('button');
console.log(getButtons);

buttons.forEach((e, i) =>{
  console.log(e);
if (i % 5 === 0) {
  e.style.Color = 'green' 
}
});


  




