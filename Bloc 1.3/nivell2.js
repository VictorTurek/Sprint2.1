
function calculadora(num1, num2, callback) {
    callback(num1, num2);
}

function sumaCallback(num1, num2) {
    console.log("La suma es:" + (num1 + num2));
}

calculadora(3,2,sumaCallback);

