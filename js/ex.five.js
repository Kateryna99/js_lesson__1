//Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
"use strict"

let secondAmount = parseInt(prompt('Enter second amount', '0'));

const hourAmount = secondAmount / 3600;
const minuteAmount = secondAmount / 60;

console.log(`Hour Amount is ${hourAmount.toFixed(4)}h; Minute amount is ${minuteAmount.toFixed(2)}m;`);