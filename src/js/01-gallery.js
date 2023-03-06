import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const arrGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}.jpg"
            alt="${description}"
            />
        </a>
    </div>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", arrGallery);
