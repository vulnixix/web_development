const more1 = document.querySelector('.more1');
const more2 = document.querySelector('.more2');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
let count = 0;
const less1 = document.querySelector('.less1');
const less2 = document.querySelector('.less1');

less1.addEventListener('click', function () {
    if (count > 0) {
        count = count - 1;
    }
    answer1.textContent = count;
});

less2.addEventListener('click', function () {
    if (count > 0) {
        count = count - 1;
    }
    answer2.textContent = count;
});

more1.addEventListener('click', function () {
    count = count + 1;
    answer1.textContent = count;
});
more2.addEventListener('click', function () {
    count = count + 1;
    answer2.textContent = count;
});
