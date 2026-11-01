const click = document.querySelector(".tap");
const text = document.querySelector(".hidden1");
click.addEventListener('click', function () {
  text.classList.remove('hidden1');
});
