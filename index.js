import photoloader from "./lib/photoloader.js";

function getPicture(id){
    let promise = photoloader.loadPicture(id);
    promise.then(p=>{
        console.log(p.photo.titre);
    })}


getPicture(window.location.hash ? window.location.hash.substr(1): 105);
