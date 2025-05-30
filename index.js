import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";

function getPicture(id){
    let promise = photoloader.loadPicture(id);
    promise.then(image=>{
        // console.log(image.photo.titre);
        // console.log(image.photo.type);
        // console.log(image.photo.descr);

        ui.displayPicture(image);
    })}

getPicture(window.location.hash ? window.location.hash.substr(1): 105);



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