var splide = new Splide('.splide', {
    type: 'slide',
    perPage: 8,
    rewind: true,
    gap: '1rem',
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '20rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '20rem',
        },
    },
});
splide.mount();