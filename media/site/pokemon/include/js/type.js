// Renvoie un tableau avec les pokémon du type id
function get_pokemons(data, id) {
  let pokemons = []
  for (const pokemon of data) {
    for (const type of pokemon["type"]) {
      if (type == id) {
        pokemons.push(pokemon)
      }
    }
  }
  return pokemons
}

// Trouver le type de pokémon à montrer en fonction du paramètre dqns l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

// Remplir la page
// C'est code est identique à celui de main.js
document.querySelector("title").textContent += id
document.querySelector("h1").textContent = id
//Prends l'ID de la descrption, quand l'ID correspond à un type, il va chercher dans l'URL du type, et le compare au dictionnaire créé par rapport au clé
//quand la clé correspond, il insère la description
document.querySelector("p#ecrit").textContent = description[id]

const pokemons = get_pokemons(data, id)
let ul = document.querySelector('#liste-pokemon')
for (let pokemon of pokemons) {
  //nous avons utilisé la balse <p> pour enlever la balise <li> (surtout pour enlever les points de la liste, ils étaient pas très beau)
  let p = document.createElement("p")
  let a = document.createElement("a")
  a.setAttribute("href", `pokemon.html?id=${pokemon["nom"]}`)
  p.appendChild(a)
  let img = document.createElement("img")
  //ALORS...cette longue balise sert à insérer du code HTML en le mêlant avec le code JS, elle se concentre sur toutes les images PNG des pokémons.
  a.innerHTML = '<div class="container"><img src="img/' + pokemon ["png"] + '" height = 250px><div class="nomPoke"><div class="text">' + pokemon["nom"] + '</div></div></div>'
  p.appendChild(img)
  ul.appendChild(p)
}

// Remplir le menu
ul = document.querySelector('#liste-types')
for (let type of types) {
  let li = document.createElement("li")
  li.innerHTML = `<a href="type.html?id=${type}"><img id="imgtype" src="img/${type}.png"></a>`
  ul.appendChild(li)
}