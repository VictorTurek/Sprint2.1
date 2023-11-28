// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

let noms = ['Anna', 'Bernat', 'Clara']

for (const [index, nom] of noms.entries()) {
   
    console.log(index, nom);
}