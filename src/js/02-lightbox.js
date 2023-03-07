import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const arrGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", arrGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionPosition: "bottom",
  captionClass: "",
});
