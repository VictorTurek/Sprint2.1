function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
          }
}

function miArray(elemento) {
    console.log("procesando elemento: " + elemento)
}

const array = [1,3,5,6,2];
processarElements(array, miArray);
