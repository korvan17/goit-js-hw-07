import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const arrGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li>
        <img
        width = "320"
        src="${preview}"
        alt="${description}"
        />
    </li>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
const listGallerry = document.createElement("ul");
listGallerry.insertAdjacentHTML("beforeend", arrGallery);
gallery.appendChild(listGallerry);
