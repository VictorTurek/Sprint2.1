const numbers = [1, 2, 3, 4];

const pares = numbers.filter(par);

function par(value) {
    return value % 2 === 0;
}

console.log(pares);