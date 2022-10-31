// input : number
// output undefined

// algo
// 1. iterate 2 ... num +++
// 2. check if number is prime +++
// 2.0 create counter +++
//  2.1 iterate 1 ... number +++
//  2.2 if number % index === 0 --> count ++
//  2.3 if counter >= 2 > is not a prime +++
// 3.if prime -> console +++

function getPrimes(num) {
  console.log('NUM', num);
  for (let number = 2; number <= num; number += 1) {
    console.log('CHECKING IF NUMBER IS PRIME' + number);
    let counter = 0;

    for (let index = 1; index <= number; index += 1) {
      //   console.log('STEP' + index);
      if (number % index === 0) {
        // console.log('COUNTER FOUND' + index);
        counter += 1;
      }
    }
    console.log('FOR NUMBER' + number + 'COUNTER FOUND' + counter);

    if (counter === 2) {
      console.log(number);
    }
  }
}

// 10
// ==> 2 3 5 7
// 15
// 2 3 5 7 11 13

// 8
// 1 .. 8
// 2 => 8 === 0 => if
// 3
// 4 ...

// test data

getPrimes(10);
getPrimes(11);
getPrimes(15);
