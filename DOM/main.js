console.log('1 Ejercicio');
console.log('----------1A--------');
const selectPf = document.querySelector('p');
console.log(selectPf);
console.log('----------1B--------');
const selectAllOne = document.querySelector('#p1')
const selectAllTwo = document.querySelector('#p2')
const selectAllTree = document.querySelector('#p3')
const selectAllFour = document.querySelector('#p4')
console.log(selectAllOne,selectAllTwo,selectAllTree,selectAllFour);
console.log('----------1C--------');
const selectAll = document.querySelectorAll('p')
console.log(selectAll);
console.log('----------1D--------');
const selectTexOne  = document.querySelector('#p1')
const selectTexTwo  = document.querySelector('#p2')
const selectTexTree = document.querySelector('#p3')
const selectTexFour = document.querySelector('#p4') 
console.log(selectTexOne.innerText);
console.log(selectTexTwo.innerText)
console.log(selectTexTree.innerText)
console.log(selectTexFour.innerText);
console.log('----------1E--------');
const changTexFour = document.querySelector('#p4')
changTexFour.innerText = "Forth Paragraph"
console.log(changTexFour);
//------------------------------------------------------------------------------------------------------------------------
console.log('2 Ejercicio');
console.log('----------2A--------');
const changeStyPar = document.querySelectorAll('p');
const newChange = changeStyPar.forEach((st) => {
    st.style.color = "red";
    st.style.backgroundColor = "blue";
    st.style.border = 'dashed';
    st.style.fontSize = '25px';
    st.style.fontFamily = 'Arial'
  });
  console.log('----------2B--------');
const par = changeStyPar.forEach((element, i) =>{
    if (i%2===0) {
      element.style.color = "green";
   }else {   
      element.style.color = "black";
   }
})
console.log('----------2C--------');

const textos = ['hola','como', 'tu','estas']
const ids = ['primero','segundo', 'tercero','cuarto']
const clases = ['pr','se', 'te','cu']

changeStyPar.forEach((e,i) => {
  e.innerText = textos[i]
  e.id = ids[i]
  e.class = clases[i]
  
  i == 0 ? e.style.backgroundColor = 'violet' : ''

});







  


