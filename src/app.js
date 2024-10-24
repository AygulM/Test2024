function menuClick(){
    menuBtn.classList.toggle('active');
    menuHiden.classList.toggle('active');
}
let menuBtn = document.querySelector('.hamburger');
let menuHiden = document.querySelector('.sidebar');


menuBtn.addEventListener('click', menuClick);


