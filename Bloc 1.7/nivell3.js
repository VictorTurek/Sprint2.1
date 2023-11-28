// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.



const SaludoDiferido = (mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mensaje == "hola") {
                resolve("La promesa se ha resuelto con exito. Hola!")
            } else {
                reject("La promesa fue rechazada.");
            }
        }, 2000);
    });
}

SaludoDiferido("hla")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));