const numbers = [1, 2, 3, 4];

const cuadrado = numbers.map(potencia);

function potencia (value) {
    return value * value;
}

console.log(cuadrado);