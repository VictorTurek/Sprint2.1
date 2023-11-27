const num = -10

const checkNumber = num > 0 ? "positiu": num < 0 ? "negatiu": "zero"

console.log(checkNumber);

const maxNumber = (a, b, c) =>{
    const maxim = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return maxim;
}

console.log(maxNumber(12, 15, 7))