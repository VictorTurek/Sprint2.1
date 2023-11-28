// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.


const SaludoDiferido =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola, món")
        }, 2000);
    });
}
    
SaludoDiferido()
.then((mensaje) => console.log(mensaje))
.catch((error) => console.error(error)); //en este caso no deberia dar error, pero lo pongo como ejemplo