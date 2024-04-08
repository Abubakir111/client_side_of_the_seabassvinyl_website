import { Btnanimation } from './modules/aminateFun.js';
const button = document.querySelector('#block-button');
const animateBtnHeader = document.querySelector('#block-button__aninamtion');
const animateBtnHeaderText = document.querySelector('#block-button__text-span');
const headerBurgerClickOpen = document.querySelector('#header__button-burger');
const headerMenuBurgeblock = document.querySelector('#header__menu');
const headerMenuBlockClickClose = document.querySelector('#header__menu-icon');
const cardBlockAnimation = document.querySelectorAll('.block-card__more-btn');

button.addEventListener('mouseover', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

button.addEventListener('mouseout', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

headerBurgerClickOpen.addEventListener('click', () => {
  headerMenuBurgeblock.style = `width: 100%;`;
  setTimeout(() => {
    headerMenuBurgeblock.querySelector('.header__menu-container').style.display = 'block';
    setTimeout(() => {
      headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
        e.style = ' transition-duration: 1s; transform: translateY(0%); ';
      });
      setTimeout(() => {
        document.querySelector('.header__menu-column2').style = 'opacity:1';
      }, 100);
    }, 10);
  }, 1000);
});

headerMenuBlockClickClose.addEventListener('click', () => {
  setTimeout(() => {
    headerMenuBurgeblock.style = `width: 0%;`;
    headerMenuBurgeblock.querySelector('.header__menu-container').style.display = 'none';
    headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
      e.style = ' transition-duration: 1s; transform: translateY(100%);';
    });
  }, 1000);
  setTimeout(() => {
    headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
      e.style = ' transition-duration: 1s; transform: translateY(-100%); ';
    });
  }, 500);
  document.querySelector('.header__menu-column2').style = 'opacity:0';
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '#slider__btn-right',
    prevEl: '#slider__btn-left'
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    664: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

cardBlockAnimation.forEach((e) => {
  e.addEventListener('mouseover', () => {
    const card = e.parentElement.parentElement.parentElement.parentElement;
    card.querySelector('.block-card__floating-picture').style = 'transform: rotate(-15deg); top: 30px;  opacity: 1;';
  });
});
cardBlockAnimation.forEach((e) => {
  e.addEventListener('mouseout', () => {
    const card = e.parentElement.parentElement.parentElement.parentElement;
    card.querySelector('.block-card__floating-picture').style = 'transform: rotate(0deg);  top: 84px;';
  });
});

// window.addEventListener('scroll', function () {
//   if (document.documentElement.scrollTop > 0) {
//     console.log('мля  он скролит ....');
//   }
//   if (document.documentElement.scrollTop > 0) {
//     let scroll = document.documentElement.scrollTop;
//     console.log(`мля  он проскролил  ${scroll} ...`);
//   }
//   if (document.documentElement.scrollTop > 100) {
//     let scroll = document.documentElement.scrollTop;
//     console.log(`этот пидор проскролил   ${scroll}....`);
//   }
// });
