import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";
import gallery from "./lib/gallery.js";
import gallery_ui from "./lib/gallery_ui.js";

function getPicture(id){
    let promise = photoloader.loadPicture(id);
    promise.then(image=>{
        // console.log(image.photo.titre);
        // console.log(image.photo.type);
        // console.log(image.photo.descr);

        ui.displayPicture(image);
        ui.displayCategorie(getCategorie(image));
        ui.displayComments(getComments(image));
    })}

function getCategorie(image){
    return photoloader.loadRessource('https://webetu.iutnc.univ-lorraine.fr'+image.links.categorie.href);
}

function getComments(image){
    return photoloader.loadRessource('https://webetu.iutnc.univ-lorraine.fr'+image.links.comments.href);
}

//getPicture(window.location.hash ? window.location.hash.substr(1): 105);
document.querySelector('#buttonGallery').addEventListener('click', ()=>{
    gallery.load().then(galleryData => {
        gallery_ui.display_gallery(galleryData);
    }).catch(err => console.error(err))}
);




/*
photo 105 :
cats-796437_1920
 image/jpeg
 Rerum nulla numquam voluptatem. Suscipit consequuntur dicta error. Nisi dicta atque unde accusantium.

photo 106 :
 adresse : http://localhost/td6#106
 cheetah-1170149_1920
 image/jpeg
 Velit consequatur molestiae commodi natus qui. Illo aut eaque maiores enim. Odit ex dolor vel id molestiae ut quia.
*/