const numbers =  [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const transformed = numbers.filter(value => value > 10).map(value => value * 2).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(transformed);


