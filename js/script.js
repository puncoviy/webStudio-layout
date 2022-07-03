const menuLink = document.querySelectorAll('.header-menu__item-link');
const sliderDots = document.querySelectorAll('.dot');
const sliderImg = document.querySelector('.header-slider__img');

for (let i = 0; i<menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(){
        menuLink.forEach(link => link.classList.remove('active'));
        menuLink[i].classList.add('active');
    });
}

let imgSource = ['./img/office1.png', './img/office2.png', './img/office3.png', './img/office4.png', './img/office5.png'];
let index = 0;

setInterval (function(){
    if (index === imgSource.length - 1) {
      index = 0;
    }
    sliderImg.style.opacity = '0';
    sliderDots.forEach(dot => dot.classList.remove('active'));
    setTimeout(function(){
        sliderImg.src = imgSource[index];
    }, 300);
    setTimeout(function(){
        sliderImg.style.opacity = '1';
        sliderDots[index].classList.add('active');
    }, 300);
    index++;
} , 5000);

sliderImg.addEventListener('click', function(){
    if (index === imgSource.length - 1) {
        index = 0;
    };
    sliderImg.style.opacity = '0';
    sliderDots.forEach(dot => dot.classList.remove('active'));
    setTimeout(function(){
        sliderImg.src = imgSource[index];
    }, 300);
    setTimeout(function(){
        sliderImg.style.opacity = '1';
        sliderDots[index].classList.add('active');
    }, 300);
    index++;
});

for(let i=0; i<sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function(){
        sliderDots.forEach(dot => dot.classList.remove('active'));
        sliderDots[i].classList.add('active');
        sliderImg.style.opacity = '0';
        setTimeout(function() {
            sliderImg.src = './img/office' + (i+1) + '.png';
            sliderImg.style.opacity = '1';
        }, 300);
    })
}



