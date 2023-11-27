const objeto1 = {
    name: "martillo",
    color: "marron",
    precio: "caro"
};

const objeto2 = {...objeto1 }

const objeto3 = {...objeto2, color: "negro"}; //metodo 1

const objeto4 = {...objeto1 }; 

objeto4.color = "verde"; //metodo 2


console.log(objeto1);
console.log(objeto2);
console.log(objeto3);
console.log(objeto4);