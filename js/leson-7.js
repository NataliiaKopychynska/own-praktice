//!подія click
// const btn = document.querySelector('.btn-click');
// const box = document.querySelector('.square');

// btn.addEventListener('click', clickFunction);

// let step = 0;

// function clickFunction() {
//   // console.log('ok');
//   step += 50;
//   box.style.margineTop = `${step}px`;
//   box.style.margineLeft = `${step}px`;
// }

//!change => cheskbox/radio
// const chenge = document.querySelector('.checkbox-input');
// chenge.addEventListener('change', () => {
//   console.log('ok');
// });

//! виводить в консоль те що користувач вводить в інпут
//!change - відпрацьовує коли втрачає фокус
// const userChange = document.querySelector('.first-input');
// userChange.addEventListener('change', () => {
//   console.log('ok');
// });
// !input
// const user = document.querySelector('.first-input');
// // user.addEventListener('input', event => {
// //   // console.log(event.target); посилання на наш елемент
// //   console.log(event.target.value); //значення того що ми вписуємо
// // });
// user.addEventListener('input', handInputFunction);
// function handInputFunction(event) {
//   console.log(event.target.value);
//   // ||
//   console.log(user.value);
// }

//! отримання алертів
//! focus
// const user = document.querySelector('.first-input');
// user.addEventListener('focus', () => {
//   console.log('ok');
// });
//!blur
// user.addEventListener('blur', handBlur);

// function handBlur(event) {
//   const name = event.target.value;
//   alert(`Hello ${name}`);
// }

//! подія submit - для відправлення форми
//! властивість elements
// const form = document.querySelector('.login-form');
// form.addEventListener('.submit', handlSubmit);

// function handlSubmit(event) {
//   //відключити дефолтну поведінку
//   event.preventDefault();
//   // console.dir(event.currentTarget);
//   const elements = event.currentTarget.elements;
//   console.log(elements.email); //отримуємр посилання на елемент
//   console.log(elements.email.value); //get данні
//   const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     coment: elements.coment.value,
//   };
//   console.log(info);

//   //очистити форму
//   event.target.reset();
// }

//! типи події: keypress(не  реагує на shift tab ...), keydown(коли натискаємо), keyup (відпускаємо)
//? обмеження keypress
//? вдастивості key(враховує клавіші і регістир і мову) і code(показую соd конкрутний фізичний код клавіші)

// document.addEventListener('keydown', handlKeyPress);
// function handlKeyPress(event) {
//   console.log(event.code.key); //бачимо те що ми натискаємо
// }

// document.addEventListener('keydown', handlKeyDown);
// function handlKeyDown(event) {
//   if (event.code === 'Escape') {
//     console.log('Escappe');
//   } else {
//     console.log('Oooops');
//   }
// }

//! обробка комбінацій клавіщ
// document.addEventListener('keydown', hendlKey);
// function hendlKey(event) {
//   if (event.ctrlKey && event.code === 'KeyC') {
//     console.log('ok');
//     event.preventDefault();
//   }
// }

//!події миші
// ?mauseenter i mauseleave (hover) - не четливий до переходів
// ?mauseover i mouseout - при переході на вкладений елемент чутливий до перетинання кордону елементу
// ?mousemove (chatty event = балакуча подія) - реагує на кожен рух мишки

// const box = document.querySelector('.js-box');

// box.addEventListener('mouseenter', onMouseEnter);
// box.addEventListener('mouseenter', onMouseLeave);

// function onMouseEnter(event) {
//   const myBox = event.target;
//   myBox.classList.add('inner-box-hover');
//   myBox.classList.remove('inner-box-hover');
// }

// function onMouseLeave(event) {}
