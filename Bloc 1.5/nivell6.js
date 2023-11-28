const numbers = [11, 11, 13, 14];



function isMoreThan10(value) {
    return value > 10;
}


console.log(numbers.every(isMoreThan10));
console.log(numbers.some(isMoreThan10));

//Con funcion Flecha

const TodosMayores = numbers.every(value => value > 10);
const AlgunoMayor = numbers.some(value => value > 10);
console.log(TodosMayores);
console.log(AlgunoMayor);