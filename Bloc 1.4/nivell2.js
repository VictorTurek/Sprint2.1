// Evitar usar la funcion .reduce. hace el codigo dificil de entender, no tienen ventajas a nivel de procesamiento.

//Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...numeros) {
    return numeros.reduce((inicial, acumulado) => inicial + acumulado, 0);
}


console.log(suma(1, 2, 3, 4, 5));
console.log(suma(1, 2));
console.log(suma());