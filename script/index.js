import { Btnanimation } from './modules/aminateFun.js';
const button = document.querySelector('#header__button');
const animateBtnHeader = document.querySelector('#header__button_aninamtion');
const animateBtnHeaderText = document.querySelector('.header__button_text_span');
const headerMenuBurgerBtnOpen = document.querySelector('#header__MenuBurger-button');
const headerMenuBurgeblock = document.querySelector('#header__MenuBurger_block');
const headerMenuBurgerBlockClose = document.querySelector('#header__MenuBurger_block_close_icon');

button.addEventListener('mouseover', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

button.addEventListener('mouseout', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

headerMenuBurgerBtnOpen.addEventListener('click', () => {
  headerMenuBurgeblock.style = `right:0px`;
});
headerMenuBurgerBlockClose.addEventListener('click', () => {
  headerMenuBurgeblock.style = `right:-900px`;
});
