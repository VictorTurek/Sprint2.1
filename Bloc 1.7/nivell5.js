// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function funcionAsinc(condicionSimulada) {
    try{
    let mensaje = await SaludoDiferido(condicionSimulada);
        console.log(mensaje);
    } catch (error){
        console.log("se ha producido un error. ", error);
    }
}

const SaludoDiferido = (condicionSimulada) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicionSimulada) {
                reject('Se produjo un error simulado');
            } else {
                resolve("Hola, món");
            }
        }, 2000);
    });
}

funcionAsinc(1 !== 1); // segun la cndicion se cumpla o no, dara error o no.