//! припинити спливання події
// function clickChengeColor(event) {
//     event.stopPropagation()
// }

console.log(_); // !Весь об'єкт бібліотеки Lodash
// !Для перевірки використовуй методи:
// !sum — він обчислює суму значень у масиві
// !shuffle — створює масив перетасованих значень
console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectClickChangeColor);

// function clickChengeColor(event) {
//   console.log(event.target);

//   const selectedColor = event.target.dataset.color;
// }

//!для перевірки типу елементу використовується nodeName
// function selectClickChangeColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return; // Користувач клікнув не на кнопку
//   }
//   const selectedColor = event.target.dataset.color; // Отримуємо колір з атрибуту кнопки
//   output.textContent = `Selected color: ${selectedColor}`; // Правильний шаблонний рядок
//   output.style.color = selectedColor; // Змінюємо колір тексту
// }

// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
