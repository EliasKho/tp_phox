import photoloader from "./photoloader.js";

const load = function(lien="https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos") {
    return photoloader
        .loadRessource(lien)
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

const next = function(gallery){
    return gallery.links.next.href;
}

const prev = function(gallery){
    return gallery.links.prev.href;
}

const first = function(gallery){
    return gallery.links.first.href;
}

const last = function(gallery){
    return gallery.links.last.href;
}

export default {
    load: load,
    next : next,
    prev : prev,
    first:first,
    last:last
};
