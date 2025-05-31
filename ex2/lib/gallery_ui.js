const display_gallery = function(gallery) {
  let html = "";
  gallery.photos.forEach(element => {
    html += `<figure data-photoId="${element.photo.id}">
                <img src="https://webetu.iutnc.univ-lorraine.fr${element.photo.url.href}" alt="${element.photo.titre}">
                <figcaption>${element.photo.titre}</figcaption>
            </figure>`;
  });
  document.querySelector('#la_gallerie').innerHTML = html;
  document.querySelector('#la_photo').innerHTML ="";
};

export default {
  display_gallery: display_gallery
};
