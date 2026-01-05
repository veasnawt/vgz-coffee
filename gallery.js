const galleryListElement = document.getElementById("gallery-list");

let galleryImagesElem = "";

for(let i = 1; i <= 6; i++) {
    galleryImagesElem += 
    `<img class="gallery-img" onclick="showFullScreenImg('image/gallery-img-' + ${i} + '.jpg')" src="image/gallery-img-${i}.jpg" alt="gallery-img-${i}">`;
}

galleryListElement.innerHTML = galleryImagesElem;


function hideFullScreenImg() {
     document.getElementById("overlay").style.display = "none";
    document.getElementById("image-view").style.display = "none";
}

function showFullScreenImg(img) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("image-view").style.display = "block";
    document.getElementById("image-view").innerHTML = 
    `<div class="img-view-container"><img class="img-view" src="${img}"><div id="x" onclick="hideFullScreenImg()">X</div></div>`;
}