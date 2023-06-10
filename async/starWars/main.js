const getPersonages = async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const data = await res.json();
    console.log(data.results);
}
getPersonages();

const getDataVader = async () => {
   const res = await fetch('https://swapi.dev/api/people/4/')
    const data = await res.json();
    console.log(data);
   
    document.body.innerHTML= '<div></div>'
     const div = document.querySelector('div')

       div.innerHTML = `<h2>${data.name}</h2>
                        <p>${data.birth_year
                        }</p> 
                        <p>${data.height}</p> 
                
                      `;

 }
 getDataVader();


const getMoviesLuky = async () => {
    const res = await fetch('https://swapi.dev/api/people/1/')
    const data = await res.json();

   const promises = data.films.map(async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    return data
   })
   const result = await Promise.all(promises);
   console.log(result);
}
getMoviesLuky ();

const getPlanetLeia  = async () => { 
    const res = await fetch('https://swapi.dev/api/people/5/')
    const data = await res.json();


    const homeWorld =  await fetch (data.homeworld);
    const response = await homeWorld.json();
    console.log(response.name);
}
getPlanetLeia();


const getUrl = async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const data = await res.json();

    const url = data.results.find(element =>  element.name === 'C-3PO').url
    console.log(url);
    const res1 = await fetch(url)
    const data1 = await res1.json();

    const promises = data1.films.map(async (ele) => {
        const res = await fetch(ele)
        const data = await res.json();
         return data
       })
       const result = await Promise.all(promises);
       console.log(result);
      
}
getUrl();



                   
                      





