const form = document.getElementById('eitherForm');
const daySelect = document.getElementById('daySelect');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // страница не обновляется

  const day = daySelect.value;

  // Два дня дают одну и ту же фразу — сравнение с каждым целиком, через ||
  if (day === '1' || day === '2') {
    result.textContent = 'Отличный выбор: этот день хорошо подходит для новых дел.';
    return;
  }

  // Третий день — своя фраза
  if (day === '3') {
    result.textContent = 'Пятница — день, когда хочется замедлиться и подвести итоги.';
    return;
  }

  // Пустой пункт — третья фраза, не такая, как у дней
  result.textContent = 'День пока не выбран — но ты всегда можешь передумать.';
});
