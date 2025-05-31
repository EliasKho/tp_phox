import config from "./config.js";

const loadPicture = function(idPicture){
    return fetch(config.url+"/photos/"+idPicture,{credentials:'include'})
    .then(reponse=>{
        if(!reponse.ok){
            throw new Error('Erreur HTTP : '+reponse.status);
        }
        //retourne la reponse pour le prochain .then
        return reponse;
    })
    .then(reponse => reponse.json())
    .catch(erreur=>{
        console.log('Erreur de réponse : '+erreur.message);
    });
}

const loadRessource = function(uri){
    return fetch(uri,{credentials:'include'})
    .then(reponse=>{
        if(!reponse.ok){
            throw new Error('Erreur HTTP : '+reponse.status);
        }
        return reponse;
    })
    .then(reponse => reponse.json())
    .catch(erreur=>{
        console.log('Erreur de réponse : '+erreur.message);
    });
}

export default {
    loadPicture : loadPicture,
    loadRessource : loadRessource
}