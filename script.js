let header__burger = document.querySelector('.header__burger');
let header__button = document.querySelector('.header__button');
let header_menu = document.querySelector('.menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header__button.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}