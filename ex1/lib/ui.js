import Handlebars from "handlebars";

let displayPicture = function(image){ 
    const source = document.getElementById("photoTemplate").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(image);
    document.getElementById("la_photo").innerHTML = html;
    document.querySelector("main#photo > h1").textContent = "Photo : " + image.photo.id;
}

let displayCategorie = function(promise){
    promise.then(image => {
        document.querySelector('#la_categorie').innerText = "categorie : "+image.categorie.nom;
    });
}

let displayComments = function(promise){
    let ul = document.querySelector('#les_commentaires');
    ul.innerHTML = ""; // on vide avant de remplir
    promise.then(image => {
        image.comments.forEach(element => {
            let li = document.createElement('li');
            li.innerText = `(${decodeHtmlEntities(element.pseudo)}) ${decodeHtmlEntities(element.content)}`;
            ul.appendChild(li);
        });
    });
}

//méthode pour afficher correctement les accents et apostrophes sans injections XSS
function decodeHtmlEntities(str) {
    let txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}



export default {
    displayPicture : displayPicture,
    displayCategorie : displayCategorie,
    displayComments : displayComments
}