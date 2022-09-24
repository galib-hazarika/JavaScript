//Even before intialize we can acees the function and variable
//Demo
//This phenomena happen because on exectution of prog the global execution context comes into play
//There first in memory black in from of key value pair the variables and function values are mapped
//for variable the value at first phase is undefined and for functions it's function body
//arrow function behave like variables not like function
getName();
// console.log(weiredBehaviour); //give error as its act like variables
// weiredBehaviour2(); //give error as its act like variables
console.log(x); //gives undefined
console.log(getName);
console.log(a);
function getName() {
  console.log("Hello World!");
}
let weiredBehaviour = () => {
  console.log(2 + 3);
};
let weiredBehaviour2 = function () {
  console.log("lion");
};
var x = 32;
let a = 9;
console.log(getName);
