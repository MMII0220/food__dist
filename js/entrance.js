window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.registry').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './registry-page.html';
  });

  document.getElementById('enter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = './website.html';
  });

  document.getElementById('registry-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = './index.html';
  });
  document.querySelector('#registry-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = './index.html';
  });  // Не работает
});
