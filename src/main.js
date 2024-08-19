
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

const form = document.querySelector(`.form`);
const inputValue = document.querySelector(`input[type="text"]`);
const gallery = document.querySelector(`.ul-gallery`);
const loader = document.querySelector(`.loader-container`);


const createGalleryCard = (imgInfo) => {
    return `
    <li class="gallery-card">
       <a href="${imgInfo.largeImageURL}" title="${imgInfo.tags}">
           <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
       </a>
       <ul class="stat-img">
           <li class="img-stat-item">Likes <span class="number-of-stat">${imgInfo.likes}</span></li>
           <li class="img-stat-item">Views <span class="number-of-stat">${imgInfo.views}</span></li>
           <li class="img-stat-item">Comments <span class="number-of-stat">${imgInfo.comments}</span></li>
           <li class="img-stat-item">Downloads <span class="number-of-stat">${imgInfo.downloads}</span></li>
       </ul>
    </li>
    `;
}

const searchForm = event => {
    event.preventDefault();
    
    gallery.innerHTML = '';
    loader.classList.remove(`is-hidden`);
    
    fetch(`https://pixabay.com/api/?q=${inputValue.value}&orientation=horizontal&per_page=9&key=45497630-f588d73f1b1f7379927f92167`)
       .then(response => {
           if (!response.ok) {
               throw new Error(response.status);
           }

        return response.json();
       })
       .then(data => {
           
           if (data.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",

                backgroundColor: '#ef4040',
                messageColor: '#fafafb',
                messageSize: '16px',
                messageLineHeight: '150%',

                maxWidth: 432,
                position: 'topRight',

                iconUrl: `./img/icon-error.svg`,
            });
           } else {
             inputValue.value = '';
             const createGallery = data.hits.map(img => createGalleryCard(img)).join('');
             gallery.innerHTML = createGallery;
             lightbox.refresh();

             loader.classList.add(`is-hidden`);
           }
       })
       .catch(err => {
           console.log(err);
       });
};

document.addEventListener('DOMContentLoaded', function() {
    lightbox = new SimpleLightbox('.ul-gallery a', {
        captions: true,
        captionDelay: 250,
        animationSpeed: 300,
        captionsData: 'title'
    });
});

form.addEventListener(`submit`, searchForm);
    