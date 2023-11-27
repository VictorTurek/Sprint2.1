class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log("Hola, " + this.name);
    }
}

const person1 = new Person("Victor");
person1.greet();