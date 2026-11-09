const nameInput = document.getElementById('nameInput');
const result = document.getElementById('result');

// Просьба, пока поле пустое
const prompt = 'Напиши, пожалуйста, своё имя.';

// Начальное состояние
result.textContent = prompt;

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();

  // Поле пустое — снова только просьба, без запятой и лишних пробелов
  if (name === '') {
    result.textContent = prompt;
    return;
  }

  // На каждую букву — приветствие с текущим именем
  result.textContent = `Привет, ${name}!`;
});
