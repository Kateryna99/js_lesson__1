// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиц
"use strict"

let a = parseFloat(prompt('Enter a value'));
let b = parseFloat(prompt('Enter b value'));

const S1 = a + b;
const S2 = a * b;
const S3 = a / b;

console.log(`S1(Sum) is ${S1.toFixed(2)}; S2(Multiple.) is ${S2.toFixed(2)}; S3(division) is ${S3.toFixed(2)};`);