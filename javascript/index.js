var splide = new Splide('.splide', {
    type: 'slide',
    perPage: 8,
    rewind: true,
    gap: '1rem',
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.3rem',
            height: '20rem',
        },
        480: {
            perPage: 1,
            gap: '.3rem',
            height: '20rem',
        },
    },
});
splide.mount();
//Time Set
let interval;
function setValuByID() {
    const date = new Date();
    document.getElementById('liveClock').innerHTML = date.toLocaleTimeString();
}
function getTime() {
    interval = setInterval(setValuByID, 1000);// function to Avoid recursion
}
getTime()
