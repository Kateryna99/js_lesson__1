//Exercise 0; 1. S1=a+12+b;
"use strict"

{
    let a = parseFloat(prompt('Enter a value', '0'));
    let b = parseFloat(prompt('Enter b value', '0'));

    const S1 = a + 12 + b;

    console.log(`S1 = ${S1.toFixed(2)}`);
}

//2.

{
   let a = parseFloat(prompt('Enter a value', '0'));
   let b = parseFloat(prompt('Enter b value', '0'));

   const S2 = Math.sqrt( (a + b) / (2 * a));

   console.log(`S2 = ${S2.toFixed(2)}`);
}

//3.

{
    let a = parseFloat(prompt('Enter a value', '0'));
    let b = parseFloat(prompt('Enter b value', 0));
    let c = parseFloat(prompt('Enter c value', 0));

    const S3 = Math.cbrt((a + b) * c);

    console.log(`S3 = ${S3.toFixed(2)}`);
}

//4.
{
   let a = parseFloat(prompt('Enter a value', '0'));
   let b = parseFloat(prompt('Enter -b value', '0'));

   const S4 = Math.sin(a / (-b));

   console.log(`S4 = ${S4.toFixed(2)}`);
}