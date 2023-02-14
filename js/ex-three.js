//Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

"use strict"

let productPrice = parseFloat(prompt('Enter your product price', '0'));
let productQuantity = parseInt(prompt('Enter your product quantity', '0'));
const vat = 0.05;

const totalCost = productPrice * productQuantity;
const vatCost = vat * totalCost;

console.log(`Total cost is ${totalCost}; Vat(5%) is ${vatCost};`);