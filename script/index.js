import { Btnanimation } from './modules/aminateFun.js';
const button = document.querySelector('#block-button');
const animateBtnHeader = document.querySelector('#block-button__aninamtion');
const animateBtnHeaderText = document.querySelector('#block-button__text-span');
const headerBurgerClickOpen = document.querySelector('#header__button-burger');
const headerMenuBurgeblock = document.querySelector('#header__menu');
const headerMenuBlockClickClose = document.querySelector('#header___menu-icon');

button.addEventListener('mouseover', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

button.addEventListener('mouseout', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

headerBurgerClickOpen.addEventListener('click', () => {
  headerMenuBurgeblock.style = `width: 100%;`;
  headerMenuBurgeblock.querySelector('.header___Burger-container').style.display = 'block';
});
headerMenuBlockClickClose.addEventListener('click', () => {
  headerMenuBurgeblock.style = `width: 0%;`;
  headerMenuBurgeblock.querySelector('.header___Burger-container').style.display = 'none';
});
