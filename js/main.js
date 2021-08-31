// const next = document.getElementById('next')
// const prev = document.getElementById('prev')

// let id = 1
// async function nextId() {
//   id++
//   const res = await (fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
//   const json = await response.json()
// }

let id = 2
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

.then(response => response.json())

.then(json => {
  console.log(json)
  const container = document.querySelector('.container')

  document.querySelector('.card-title').innerHTML += `
  <h1>${json['name']}</h1>
  `
  document.querySelector('.card-img-top').innerHTML += `
  <img src="${json['sprites']['front_default']}">
  `
  document.querySelector('.list-group-item').innerHTML += `
  Ability: <b>${json['abilities']['0']['ability']['name']}</b>
  `
  document.querySelector('.b').innerHTML += `
  Type: <b>${json['types']['0']['type']['name']}</b>
  `
  document.querySelector('.c').innerHTML += `
  Height: <b>${json['height']}</b>
  `
  document.querySelector('#id').innerHTML += `
  #<b>${json['id']}</b>
  `
})












