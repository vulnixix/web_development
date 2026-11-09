const form = document.getElementById('dayForm');
const nameInput = document.getElementById('nameInput');
const daySelect = document.getElementById('daySelect');
const result = document.getElementById('result');

// Фразы для каждого дня (с именем) и просьба выбрать (без имени)
const phrases = {
  '1': (name) => `${name}, понедельник — хорошее начало недели, вперёд к целям!`,
  '2': (name) => `${name}, среда — середина недели, самое время для рывка.`,
  '3': (name) => `${name}, пятница уже близко — держись, выходные впереди!`
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); // страница не обновляется

  const name = nameInput.value.trim();

  // Имя обязательно: если пусто — ничего не делаем
  if (name === '') {
    return;
  }

  const day = daySelect.value;

  // Пустой пункт выбран — просьба выбрать, без имени
  if (day === '') {
    result.textContent = 'Пожалуйста, выбери один из дней в списке.';
    return;
  }

  // Свой день — своя фраза с именем
  result.textContent = phrases[day](name);
});
