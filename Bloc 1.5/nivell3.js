const numbers = [1, 10 , 8, 11]

const moreThanTen = numbers.find(bigNumber);

function bigNumber(value) {
    return value > 10;    
}

console.log(moreThanTen);