function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(`.change-color`);
buttonColor.addEventListener('click', () => {
  const colorShow = document.querySelector('.color');
  colorShow.style.color = getRandomHexColor();
  colorShow.textContent = getRandomHexColor();
});
