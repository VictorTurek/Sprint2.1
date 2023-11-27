const printNumbers = (numbers) => {
    for (let i = 0; i < numeros.length; i++) {
        ((num) => {
            console.log(num);
        })(numbers[i]);
    }
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printNumbers(numeros);
