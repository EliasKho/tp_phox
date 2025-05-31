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

function setupNavigationButtons() {
    //? ignore la ligne si le queryselector est nul
    document.querySelector('#next')?.addEventListener('click', () => {
        let nextLink = gallery.next(currentGallery);
        if (nextLink) {
            gallery.load("https://webetu.iutnc.univ-lorraine.fr" + nextLink).then(g => {
                currentGallery = g;
                gallery_ui.display_gallery(g);
                setupNavigationButtons(); // Réattacher après chaque affichage
            });
        }
    });

    document.querySelector('#prev')?.addEventListener('click', () => {
        let prevLink = gallery.prev(currentGallery);
        if (prevLink) {
            gallery.load("https://webetu.iutnc.univ-lorraine.fr" + prevLink).then(g => {
                currentGallery = g;
                gallery_ui.display_gallery(g);
                setupNavigationButtons(); // Réattacher après chaque affichage
            });
        }
    });

    document.querySelector('#first')?.addEventListener('click', () => {
        gallery.load("https://webetu.iutnc.univ-lorraine.fr" + gallery.first(currentGallery)).then(g => {
            currentGallery = g;
            gallery_ui.display_gallery(g);
            setupNavigationButtons(); // Réattacher après chaque affichage
        });
    });

    document.querySelector('#last')?.addEventListener('click', () => {
        gallery.load("https://webetu.iutnc.univ-lorraine.fr" + gallery.last(currentGallery)).then(g => {
            currentGallery = g;
            gallery_ui.display_gallery(g);
            setupNavigationButtons(); // Réattacher après chaque affichage
        });
    });

    document.querySelectorAll('figure').forEach((element)=>{
        element.addEventListener('click',(event)=>{
            getPicture(event.currentTarget.dataset.photoid);
        });
    });
}


//getPicture(window.location.hash ? window.location.hash.substr(1): 105);

let currentGallery = null;

document.querySelector('#buttonGallery').addEventListener('click', () => {
    gallery.load().then(galleryData => {
        currentGallery = galleryData;
        gallery_ui.display_gallery(galleryData);
        setupNavigationButtons(); // 🔁 attach listeners
    });
});








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