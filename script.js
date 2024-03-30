

const Slider =document.getElementById('Slider');
const mobileNav =document.getElementById('mobile-nav');


Slider.addEventListener('click', () =>{
    mobileNav.classList.toggle('-translate-x-full')
});