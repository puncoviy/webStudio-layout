const menuLink = document.querySelectorAll('.header-menu__item-link');
const sliderDots = document.querySelectorAll('.dot');
const sliderImg = document.querySelector('.header-slider__img');

for (let i = 0; i<menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(){
        menuLink.forEach(link => link.classList.remove('active'));
        menuLink[i].classList.add('active');
    });
}

for(let i=0; i<sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function(){
        sliderDots.forEach(dot => dot.classList.remove('active'));
        sliderDots[i].classList.add('active');
        sliderImg.src = './img/office' + (i+1) + '.png';
    })
}

