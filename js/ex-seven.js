//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6)
"use strict"

  let minMonth = 1;
  let maxMonth = 12;
 const randomMonthNumber = minMonth + Math.floor(Math.random()* (maxMonth-minMonth+1));

  let minDay = 1;
  let maxDay = 6;
 const randomDayNumber = minDay + Math.floor(Math.random()* (maxDay-minDay+1));

 const totalSum = randomMonthNumber + randomDayNumber;

 console.log(`The sum of random month and rondom day is ${totalSum}`)
