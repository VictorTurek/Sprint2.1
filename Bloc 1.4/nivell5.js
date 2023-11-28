function operacion(num1,num2,num3) {
    let resultado = num1 * num2 * num3;
    return resultado;
}

const numeros = [2,3,4];
console.log(operacion(...numeros));