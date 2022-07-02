const menuLink = document.querySelectorAll('.header-menu__item-link');

for (let i = 0; i<menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(){
        menuLink.forEach(link => link.classList.remove('active'));
        menuLink[i].classList.add('active');
    });
}

