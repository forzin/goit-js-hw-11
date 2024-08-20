
const BASE_URL = 'https://pixabay.com/api/'

export const fetchPhotos = searchParams => {

    const urlParams = new URLSearchParams ({
        q: searchParams,
        orientation: `horizontal`,
        per_page: 9,
        key: '45497630-f588d73f1b1f7379927f92167',
    });

    return fetch(`${BASE_URL}?${urlParams}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }

     return response.json();
    });
};