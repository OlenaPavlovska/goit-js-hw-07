import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery')
const galleryElements = []

galleryItems.forEach(galleryItem => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    const image = document.createElement('img')

    item.classList.add('gallery_item')
    link.classList.add('gallery_link')
    image.classList.add('gallery_image')

    link.href = galleryItem.original
    image.src = galleryItem.preview
    image.alt = galleryItem.description

        image.dataset.source = galleryItem.original;

    item.append(link)
    link.append(image)

    galleryElements.push(item)

})
gallery.append(...galleryElements)
console.log(galleryElements)


const lightbox= new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});