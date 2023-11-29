// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const SaludoEn2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Se ha resuelto en 2")
    }, 2000);
});


const SaludoEn3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Se ha resuelto en 3")
    }, 3000);
});


Promise.all([SaludoEn2, SaludoEn3])
    .then(resultados => {
        console.log(resultados);
    })
    .catch(error => {
        console.error(error);
    });