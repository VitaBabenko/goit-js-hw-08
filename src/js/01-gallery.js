import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox);
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join('');

gallery.insertAdjacentHTML('beforeend', markup);
// console.log(gallery);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
console.log(lightbox);