const form = document.querySelector('.signup');
const nameField = document.querySelector('.names');
const rules = document.querySelector('.accept');
const answer = document.querySelector('.answer');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (rules.checked) {
    answer.textContent = 'Ждём тебя в группе ' + nameField.value;
  } else {
    answer.textContent = 'Сначала прочитай правила ' + nameField.value;
  }
});
