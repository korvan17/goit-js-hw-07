// import * as basicLightbox from "basiclightbox";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const arrGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", arrGallery);

gallery.addEventListener("click", clickGallerayItem);

function clickGallerayItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = e.target.dataset.source;
  console.log(largeImg);

  const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`);

  instance.show();
}
