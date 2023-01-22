let ul = document.querySelector('#liste-pokemon')
for (let pokemon of data) {
    let p = document.createElement("p")
    let a = document.createElement("a")
    a.setAttribute("href", `pokemon.html?id=${pokemon["nom"]}`)
    p.appendChild(a)
    let img = document.createElement("img")
  //ALORS...cette longue balise sert à insérer du code HTML en le mêlant avec le code JS, elle se concentre sur toutes les images PNG des pokémons. Elle est aussi utile pour le hover.
    a.innerHTML = '<div class="container"><img src="img/' + pokemon ["png"] + '" height = 250px><div class="nomPoke"><div class="text">' + pokemon["nom"] + '</div></div></div>'
    p.appendChild(img)
    ul.appendChild(p)
}

// Remplir le menu
ul = document.querySelector('#liste-types')
for (let type of types) {
    let li = document.createElement("li")
    li.innerHTML = `<a href="type.html?id=${type}"><img id="imgtype" src="img/${type}.png"></a>` // innerHTML : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML 
    ul.appendChild(li)
}

function changeImage(element) {
    element.setAttribute('src', 'img/pokpik1.png');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function changeImage1(element) {
element.setAttribute('src', 'img/pokeball.png');
}

function ouvrirPage(){
    let texte = document.querySelector('#search').value
    for(const pokemon of data) {
        if(texte == pokemon['nom']) {
            window.open(`pokemon.html?id=${texte}`)
        }
    }
}