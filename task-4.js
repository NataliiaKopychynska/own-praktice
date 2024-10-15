const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', event => {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  const emailValue = document.querySelector('input[name="email"]').value;
  const passwordValue = document.querySelector('input[name="password"]').value;

  // Перевіряємо, чи заповнені всі поля
  if (!emailValue || !passwordValue) {
    return alert('All form fields must be filled in');
  }

  // Виводимо значення після успішної перевірки
  console.log({
    email: emailValue,
    password: passwordValue,
  });

  // Очищуємо форму після успішної обробки
  formSubmit.reset();
});
