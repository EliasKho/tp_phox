import Handlebars from "handlebars";

let displayPicture = function(image){ 
    const source = document.getElementById("photoTemplate").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(image);
    document.getElementById("la_photo").innerHTML = html;
    document.querySelector("main#photo > h1").textContent = "Photo : " + image.photo.id;
}

export default {
    displayPicture : displayPicture
}