// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
"use strict"

let birthYear = parseInt(prompt('Enter birth year','1900'));
let currentYear = parseInt('2023');

const age = currentYear - birthYear;

console.log(`You are ${age}`);