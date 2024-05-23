const quantityText = document.getElementById('quantity-text');
const quantityTotal = document.getElementById('quantity-total');
const productPrice = document.getElementById('product-price');

function increment() {
    let quantity = parseInt(quantityText.innerText);

    if (quantity < 10) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("You can't buy more than 10 products");
    }
    setQuantityandToatal(quantity);
}

function decrement() {
    let quantity = parseInt(quantityText.innerText);

    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("Buy minimum 1 product");
    }
    setQuantityandToatal(quantity);
}

function setQuantityandToatal(quantity) {
    quantityTotal.innerText = `Quantity : ${quantity}`;
    productPrice.innerText = `₹ ${550 * quantity}`;
}



