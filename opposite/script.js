const form = document.getElementById('oppositeForm');
const nameInput = document.getElementById('nameInput');
const check1 = document.getElementById('check1');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // страница не обновляется

  const name = nameInput.value.trim();

  // Имя обязательно: если пусто — ничего не делаем
  if (name === '') {
    return;
  }

  // Первой стоит проверка снятой галочки — через !
  if (!check1.checked) {
    result.textContent = `${name}, спасибо! Ты пока не подписан на новости — сможешь сделать это позже.`;
    return;
  }

  // Галочка стоит — другая фраза, тоже с именем
  result.textContent = `${name}, отлично! Теперь ты будешь получать наши новости.`;
});
