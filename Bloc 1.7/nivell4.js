// // Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function funcionAsinc() {
    let mensaje = await SaludoDiferido();
    console.log(mensaje)
}

const SaludoDiferido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola, món")
        }, 2000);
    });
}

funcionAsinc();
