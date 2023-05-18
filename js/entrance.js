window.addEventListener('DOMContentLoaded', () => {
  // document.getElementById('login-form').addEventListener('submit', function (event) {
  //   event.preventDefault();
  //   window.location.href = '../website.html'; // Замените ссылку на нужную
  // });
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем отправку формы по умолчанию

    // Добавьте здесь код для обработки формы, проверки данных и отправки на сервер

    // Перенаправление на другую страницу
    window.location.href = './website.html'; // Замените ссылку на нужную
  });
});
