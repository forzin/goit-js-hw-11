
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {createGalleryCard} from './js/render-functions';
import {fetchPhotos} from './js/pixabay-api';

let lightbox;

const form = document.querySelector(`.form`);
const inputValue = document.querySelector(`input[type="text"]`);
const gallery = document.querySelector(`.ul-gallery`);
const loader = document.querySelector(`.loader-container`);

const searchForm = event => {
    event.preventDefault();

    const searchValue = form.elements.user_value.value.trim();
    
    
    if (searchValue === "") {
        iziToast.show({
            message: "Error! Please enter a search term!",
            
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            maxWidth: 432,
            
            position: 'topRight',
            iconUrl: `./img/icon-error.svg`,
        });
        return; 
    }
    
    
    fetchPhotos(searchValue).then(data => {
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
            loader.classList.add(`is-hidden`);
           } else {
             inputValue.value = '';
             const createGallery = data.hits.map(img => createGalleryCard(img)).join('');
             gallery.innerHTML = createGallery;
             lightbox.refresh();

             loader.classList.add(`is-hidden`);
           }
    }).catch(err => {
        iziToast.show({
            message: "An error occurred while fetching images. Please try again.",
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            maxWidth: 432,
            position: 'topRight',
            iconUrl: `./img/icon-error.svg`,
        });
        loader.classList.remove(`is-hidden`);
        console.log(err);
    })
    
    gallery.innerHTML = '';
    
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
    