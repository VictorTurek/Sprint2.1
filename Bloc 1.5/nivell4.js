const numbers = [13, 7, 8, 21]

const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);