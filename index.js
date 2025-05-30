import photoloader from "./lib/photoloader.js";

function getPicture(id){
    let promise = photoloader.loadPicture(id);
    promise.then(p=>{
        console.log(p.photo.titre);
        console.log(p.photo.type);
        console.log(p.photo.descr);
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