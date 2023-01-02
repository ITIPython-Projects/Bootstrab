  //categories Hangdler
  const mqSmall  = window.matchMedia( '(max-width: 900px)' );
  const mqLarge  = window.matchMedia( '(min-width: 901px)' );

  if(mqLarge.matches){
    document.getElementById('collapscategories').classList.remove('collapse', 'navbar-collapse');
  }else{
    document.getElementById('collapscategories').classList.add('collapse', 'navbar-collapse')
  }
  mqSmall.addEventListener('change', mSHandler);
  mqLarge.addEventListener('change', mqHandler);
  
  // media query handler function
  function mSHandler(e) {
   if(e.matches){
    document.getElementById('collapscategories').classList.add('collapse', 'navbar-collapse');
   }
  }
  function mqHandler(e) {
    if(e.matches){
     document.getElementById('collapscategories').classList.remove('collapse', 'navbar-collapse');
    }
   }

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
    let items = document.querySelectorAll('.recomndcarousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 5
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
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

