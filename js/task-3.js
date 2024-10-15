const textInput = document.querySelector('#name-input');
const changeName = document.querySelector('#name-output');

textInput.addEventListener('blur', event => {
  changeName.textContent = event.currentTarget.value.trim();

  if (inputValue === '') {
    changeName.textContent = 'Anonymous';
  } else {
    changeName.textContent = inputValue;
  }
});
