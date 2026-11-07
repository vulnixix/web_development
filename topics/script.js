const showThemesBtn = document.getElementById('showThemesBtn');
const themesBlock = document.getElementById('themesBlock');
const topicButtons = document.querySelectorAll('.topic-btn');
const topics = {
  topic1: document.getElementById('topic1'),
  topic2: document.getElementById('topic2'),
  topic3: document.getElementById('topic3')
};

// Показ блока с тремя кнопками
showThemesBtn.addEventListener('click', () => {
  themesBlock.classList.remove('hidden');
});

// Выбор темы
topicButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedId = btn.dataset.topic;

    // Скрываем все темы
    Object.values(topics).forEach(topicEl => {
      topicEl.classList.add('hidden');
    });

    // Показываем только выбранную
    topics[selectedId].classList.remove('hidden');
  });
});
