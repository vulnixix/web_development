const price = 47;
const quantity = document.querySelector('.quantity');
const answer = document.querySelector('.answer');

function cost(itemPrice, itemQuantity) {
    return itemPrice - itemQuantity;
}

quantity.addEventListener('input', function () {
    answer.textContent = cost(price, Number(quantity.value));
});
