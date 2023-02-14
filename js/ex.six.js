//З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
"use strict"

let firstProductQuantity = parseInt(prompt('Enter first product quantity','0'));
let firstProductPrice = parseFloat(prompt('Enter first product price', '0'));

let secondProductQuantity = parseInt(prompt('Enter second product quantity','0'));
let secondProductPrice = parseFloat(prompt('Enter second product price', '0'));

let thirdProductQuantity = parseInt(prompt('Enter third product quantity','0'));
let thirdProductPrice = parseFloat(prompt('Enter third product price', '0'));

const firstTotalPrice = firstProductQuantity + firstProductPrice;
const secondTotalPrice = secondProductQuantity + secondProductPrice;
const thirdTotalPrice = thirdProductQuantity + thirdProductPrice;

const totalPrice = firstTotalPrice + secondTotalPrice + thirdTotalPrice;

console.log(
    `You have got ${firstProductQuantity} pieces of the first product for ${firstTotalPrice}$; <br>
     You have got ${secondProductQuantity} pieces of the second product for ${secondTotalPrice}$; <br>
     You have got ${thirdProductQuantity} pieces of the third product for ${thirdTotalPrice}$; <br>
     The total cost of all your product is ${totalPrice}$;`
)
