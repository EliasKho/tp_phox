const display_gallery = function(gallery) {
  let prev = new URLSearchParams(new URL('https://webetu.iutnc.univ-lorraine.fr' + gallery.links.prev.href).search).get('page');
  let next = new URLSearchParams(new URL('https://webetu.iutnc.univ-lorraine.fr' + gallery.links.next.href).search).get('page');
  let page = 0;
  if(next-prev>1){
    page = next-1;
  } else {
    if(next==2){
      page = 1;
    } else {
      page = new URLSearchParams(new URL('https://webetu.iutnc.univ-lorraine.fr' + gallery.links.last.href).search).get('page');
    }
  }
  let html = `<h1 id='numPage'>Page ${page}</h1>`;
  html += `
    <div id="navigation">
      <button id='first'>first</button>
      <button id='prev'>&lt;</button>
      <button id='next'>&gt;</button>
      <button id='last'>last</button>
    </div>
    <div id="gallery-line">`;
  gallery.photos.forEach(element => {
    html += `
      <figure data-photoId="${element.photo.id}">
        <img src="https://webetu.iutnc.univ-lorraine.fr${element.photo.url.href}" alt="${element.photo.titre}">
      </figure>`;
  });
  html += `</div>`;

  document.querySelector('#la_gallerie').innerHTML = html;
  document.querySelector('#la_photo').innerHTML ="";

};

export default {
  display_gallery: display_gallery
};
