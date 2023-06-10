const selectTitle = document.querySelector('h1');
selectTitle.innerText = "GammaTech Challenges 2023"
const selectSubTitle = document.querySelector('h2');
selectSubTitle.innerText = "Frontend Challenge"
const selectPag = document.querySelector('.wrapper')
const stylePag = (a) => {
    a.style.display= 'flex';    
    a.style.flexDirection = 'column';
    a.style.alignItems= 'center';
    a.style.justifyContent = 'center'; 
    a.style.gap = '20px';
}
stylePag(selectPag)


const actDateClock = () => {
    const selectDate = document.querySelector('#date');
    const selectClock = document.querySelector('#clock');
    let dateClockActu = new Date();

    let day = dateClockActu.getDate();
    let month = dateClockActu.getMonth() + 1;
    let year = dateClockActu.getFullYear();
    //------fecha y hora------------------
    let hours = dateClockActu.getHours();
    let minutes = dateClockActu.getMinutes();
    let seconds = dateClockActu.getSeconds();

    //------Concatenar para pintar-----------

    let dateText = day + "/" + month + "/" + year + " -";
    let clockText = hours + ":" + minutes + ":" + seconds;

    //-------Meter los valores al html--------

    selectDate.innerText = dateText;
    selectClock.innerText = clockText;

    setTimeout(actDateClock, 1000);
}
actDateClock();


const coloractDateClock = document.querySelectorAll('.wrapper div');
coloractDateClock.forEach(e => {
    e.style.backgroundColor = "#faa572"
    e.style.display= 'inline-block'
})


const colorTime = () => {
    const selectTitle = document.querySelector('h1');
    let color = colorRandom();
    selectTitle.style.color = color;

}
const colorRandom = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var colorRGB = "rgb(" + r + ", " + g + ", " + b + ")";

    return colorRGB;
}
var intervaloTiempo = 1000;
setInterval(colorTime, intervaloTiempo);

const styLi = document.querySelectorAll('li');
    
styLi.forEach(e => 
    {
    e.style.listStyle = 'none';
    e.style.padding = '10px';
    e.style.backgroundColor =  '#d95030 ';
    e.style.width = '380px';
    e.style. marginRight = '40px';

 }); 
    styLi[0].style.backgroundColor =  'rgb(65, 133, 65)';
    styLi[1].style.backgroundColor =  'rgb(255, 255, 110)';
    

const styUl = document.querySelector('ul');
styUl.style.display= 'flex';  
styUl.style.flexDirection= 'column';
styUl.style.gap = '8px';
// const titulo = document.getElementById('mi-titulo');
// const anchura = titulo.getBoundingClientRect().width;
// console.log('Anchura del título:', anchura); sirve para traer la anchura de algo que no sabemos

