const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value
  const age = e.target.age.value
  const city = e.target.city.value
  console.log(name, age, city);

  localStorage.setItem('nombre', name)
  localStorage.setItem('edad', age)
  localStorage.setItem('ciudad', city)
})

const form2 = document.querySelector('.student')

form2.addEventListener('submit', (e) => {
  e.preventDefault();


  const student = {
    firstname: e.target.name.value,
    lastname: e.target.lastname.value,
    age: e.target.age.value,
    country: e.target.country.value,
    courses: []
  }

  e.target.sciences.checked ? student.courses.push('Ciencias') : ''
  e.target.language.checked ? student.courses.push('Lengua') : ''
  e.target.math.checked ? student.courses.push('Matematicas') : ''

  const primer = JSON.parse(localStorage.getItem('student'))

  if (primer) {
    primer.push(student)
    localStorage.setItem('student', JSON.stringify(primer))
  }else{
    localStorage.setItem('student', JSON.stringify([student]))
  }
})

