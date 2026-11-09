const topicSelect = document.getElementById('topicSelect');
const topic1 = document.getElementById('topic1');
const topic2 = document.getElementById('topic2');
const topic3 = document.getElementById('topic3');

topicSelect.addEventListener('change', () => {
  const value = topicSelect.value;

  if (value === '1') {
    // Показываем первую, остальные прячем
    topic1.classList.remove('hidden');
    topic2.classList.add('hidden');
    topic3.classList.add('hidden');
  } else if (value === '2') {
    // Показываем вторую, остальные прячем
    topic2.classList.remove('hidden');
    topic1.classList.add('hidden');
    topic3.classList.add('hidden');
  } else if (value === '3') {
    // Показываем третью, остальные прячем
    topic3.classList.remove('hidden');
    topic1.classList.add('hidden');
    topic2.classList.add('hidden');
  } else {
    // Пустой пункт — прячем все три
    topic1.classList.add('hidden');
    topic2.classList.add('hidden');
    topic3.classList.add('hidden');
  }
});
