const form = document.getElementById('bothForm');
const nameInput = document.getElementById('nameInput');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // страница не обновляется

  const name = nameInput.value.trim();

  // Имя обязательно: если пусто — ничего не делаем
  if (name === '') {
    return;
  }

  // Обе галочки стоят — фраза с именем
  if (check1.checked && check2.checked) {
    result.textContent = `${name}, отличный режим: кофе утром и прогулка вечером!`;
    return;
  }

  // Одна снята (или обе сняты) — фраза без имени, одна и та же
  result.textContent = 'Попробуй добавить вторую привычку — вместе они работают лучше.';
});
