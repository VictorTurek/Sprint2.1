const Objecte1 = {
    nombre: "Victor",
    edad: 34,
    genero: "no resopnde",
}

const Objeto2 = {
    aficiones: "deporte",
    residencia: "Barcelona",
}
   const Fusion = {...Objecte1, ...Objeto2};
   
   console.log(Fusion);
