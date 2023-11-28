const array = [1,2,3,4,5,6,7,8,9,10];

let [variable1, variable2, ...variable3] = array;

console.log("variable 1: " + variable1);
console.log("variable 2: " + variable2);
console.log("variable 3: " + variable3);