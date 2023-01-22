function get_pokemon(data) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  for (const pokemon of data) {
    if (pokemon['nom'] == id) {
      return pokemon
    }
  }
}

// Renvoie une chaîne de caractères avec chaque type de pokémon
// et un lien vers sa page
function format_types(types) {
  let str = "Types : "
  for (const type of types) {
    str += `<a href="type.html?id=${type}"`;
  //A partir de là, toutes les couleurs sont attribuées à un type, c'est long mais ça marche :)
  //Un switch remplace les if else, il est compacte et est plus rapide
  switch (type) {
    case 'Plante':
      str+= ` style = "color:green"`;
      break;
    case 'Poison':
      str+= ` style = "color:purple"`;
      break;
    case 'Combat':
      str+= ` style = "color:orangered"`;
      break;
    case 'Acier':
      str+= ` style = "color:grey"`;
      break;
    case 'Glace':
        str+= ` style = "color:lightblue"`;
        break;
    case 'Psy':
      str+= ` style = "color:magenta"`;
      break;
    case 'Feu':
      str+= ` style = "color:red"`;
      break;
    case 'Dragon':
      str+= ` style = "color:lightseagreen"`;
      break;
   case 'Roche':
      str+= ` style = "color:brown"`;
      break;
    case 'Normal':
      str+= ` style = "color:indianred"`;
      break;
    case 'Fée':
      str+= ` style = "color:pink"`;
      break;
    case 'Insecte':
      str+= ` style = "color:olive"`;
      break;
    case 'Spectre':
      str+= ` style = "color:plum"`;
      break;
    case 'Vol':
      str+= ` style = "color:lightslategray"`;
      break;
    case 'Électrik':
      str+= ` style = "color:gold"`;
      break;
    case 'Sol':
      str+= ` style = "color:coral"`;
      break;
    case 'Eau':
      str+= ` style = "color:blue"`;
      break;
    
}

str+=`>${type}  </a> ` //Trouve l'URL du type
  }
  return str
}

// Renvoie une chaîne de caractères avec chaque pokémon
// et un lien vers sa page
function format_evolutions(evolutions) {
  str = "Évolutions : "
  const pokemon = get_pokemon(data)
  for (const evolution of evolutions) {
    if (pokemon['nom']==evolution){
      //A partir d'ici, la couleur du bouton se change en rouge selon l'évolution chosit, et met une flèche dans le bouton pour indiquer les évolutions
      str += `<a href="pokemon.html?id=${evolution}"><input type="button" id = "btn" value="->" style = background-color:red></a>`
    }
    else{
      str += `<a href="pokemon.html?id=${evolution}"><input type="button" id = "btn" value="->" style = background-color:white></a>`
    }
    str += `<a href="pokemon.html?id=${evolution}"></a>${evolution}`  
  }
  
  return str
}

// Remplir les informations sur le pokemon
const pokemon = get_pokemon(data)
document.querySelector("title").textContent += pokemon['nom']
document.querySelector("h1").textContent = pokemon['nom']
document.querySelector("p#description").textContent = pokemon["description"]
document.querySelector("div#image img").setAttribute("src", "img/" + pokemon["gif"]) //Différence avec le main, ici, c'est un gif, c'est plus dynamique :)
document.querySelector("#taille").textContent = "Taille : " + pokemon["taille"]
document.querySelector("#poids").textContent = "Poids : " + pokemon["poids"]
document.querySelector("#noms").textContent = `Anglais : ${pokemon['nom_en']} ; Japonais : ${pokemon['nom_ja'][1]} (${pokemon['nom_ja'][0]})`
document.querySelector("#types").innerHTML = format_types(pokemon["type"])
document.querySelector("#evolutions").innerHTML = format_evolutions(pokemon["evolutions"])
document.querySelector("audio").setAttribute("src", "son/" + pokemon["son"])

// Remplir le menu
ul = document.querySelector('#liste-types')
for (let type of types) {
  let li = document.createElement("li")
  li.innerHTML = `<a href="type.html?id=${type}"><img id="imgtype" src="img/${type}.png"></a>`
  ul.appendChild(li)
}