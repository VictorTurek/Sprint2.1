function processar(nombre, callback) {
    callback(nombre)
}

function myCallback(nombre) {
    console.log("The number is " + nombre);
}

processar(14, myCallback);

