const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const result = document.getElementById('result');

// Фразы для каждого из трёх вариантов + фраза без выбора
const phrases = {
  '1': (name) => `${name}, ты выбрал первый вариант — отличный старт!`,
  '2': (name) => `${name}, второй вариант тоже хорош: спокойный и надёжный.`,
  '3': (name) => `${name}, третий вариант — смелый выбор, так держать!`,
  'none': () => 'Ты не выбрал вариант — но и это вполне допустимо.'
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); // страница не обновляется

  const name = nameInput.value.trim();

  // Имя обязательно: если пусто — ничего не делаем
  if (name === '') {
    return;
  }

  // Находим выбранный кружок (или null, если не выбран)
  const checked = form.querySelector('input[name="option"]:checked');
  const choice = checked ? checked.value : 'none';

  // Подставляем имя только для фраз с выбором
  result.textContent = choice === 'none'
    ? phrases['none']()
    : phrases[choice](name);
});
