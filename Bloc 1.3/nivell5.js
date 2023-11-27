function processarCadena(string, callback) {
    let stringMayus = string.toUpperCase();
    callback(stringMayus);

}

function Mayus(stringMayus) {
    console.log(stringMayus)
}


const string = "HolA CaraCola"

processarCadena(string, Mayus);