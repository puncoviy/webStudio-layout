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
    // problem here - I can run slider from 1st photo, but it ends on 4th
    // so I decided to make it from 2nd to 5th
    // also I would like to add pause on mouseover
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



// next function is for parallax; borrowed code with modification
(function() {
    const elem = document.querySelectorAll(".parallax");
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.forEach(elem => elem.style.backgroundPosition = x);
    }
})();



