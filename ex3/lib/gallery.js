import photoloader from "./photoloader.js";

const load = function () {
    return photoloader
        .loadRessource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos")
        .then(collection => {
            console.log(collection);
            const promises = collection.photos.map(image =>
                photoloader.loadPicture(image.photo.id)
            );

            return Promise.all(promises).then(photosCompletes => {
                // retourne un nouvel objet avec les mêmes infos que collection,
                // mais avec photos remplacé par les données complètes
                return {
                    ...collection,
                    photos: photosCompletes
                };
            });
        });
};

let next = function(gallery){
    return gallery.links.next.href;
}

let prev = function(gallery){
    return gallery.links.prev.href;
}

export default {
    load: load,
    next : next,
    prev : prev
};
