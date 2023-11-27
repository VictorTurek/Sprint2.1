const parOImpar = (numeros) => {

    for (let i = 0; i < numeros.length; i++) {
        const tipoNumero = numeros[i] % 2 === 0 ? "par" : "impar";
        console.log(tipoNumero);
    }
}


const numeros = [2, 3, 5, 6, 7, 32, 1, 33, 56, 5]
parOImpar(numeros);