const click = document.querySelector(".tap");
const text = document.querySelector(".hidden");
click.addEventListener('click', function () {
  text.classList.remove('hidden');
});
