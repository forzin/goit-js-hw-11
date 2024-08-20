export const createGalleryCard = (imgInfo) => {
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