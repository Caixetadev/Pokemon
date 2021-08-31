const next = document.getElementById("next");
const prev = document.getElementById("prev");

async function useFetch(id = 0) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();

  return json;
}

let id = 0;
async function nextId() {
  id++;
  const json = await useFetch(id);
  addDom(json);
}

async function prevId() {
  if (id <= 1) return;
  id--;
  const json = await useFetch(id);
  addDom(json);
}

function addDom(data) {
  const container = document.querySelector("main");

  const markup = `
   <div class="card" style="width: 18rem;">
    <div class="card-img-top">
      <img src="${data.sprites.front_default}">
      <div id="id">
        <b>#${data.id}</b>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <h1>${data['name']}</h1>
      </h5>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, eum.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Ability: <b>${data.abilities[0].ability.name}</b>
      </li>
      <li class="list-group-item b">
        type: <b>${data['types']['0']['type']['name']}</b>
      </li>
      <li class="list-group-item b">
        Height: <b>${data['height']}</b>
      </li>
    </ul>
  </div>
  `;

  container.innerHTML = markup;
}

next.addEventListener("click", nextId);
prev.addEventListener("click", prevId);

nextId();











