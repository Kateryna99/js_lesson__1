//Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
"use strict"

let lengthCM = parseFloat(prompt('Enter length in cm'));

const lengthM = lengthCM / 100;
const lengthK = lengthCM / 100000;

console.log(`Length in meters is ${lengthM.toFixed(2)} meters; Length in kilometres is ${lengthK.toFixed(5)} kilometres`)