//Declaration of variable var
//Js is a dynamically typed language so we need to define its type while initializing
var name = "Galib";
var name = "Bob";
console.log(name + " " + name);
// variation in var
myName = "Galib";
function logName() {
  console.log(myName);
}
logName();
var myName;
//In let below is not allowed
// let num1 = 100
// let num1 = 120
//This is allowed
let num1 = 120;
num1 = 130;

//Type of variable
//Number
var n1 = 100.09;
var n2 = 100;
console.log(typeof n1 + " " + typeof n2);
//String
let ch1 = "a";
let ch2 = "aba";
console.log(typeof ch1 + " " + typeof ch2);
//Booleans
let isPrint = true;
let isGreater = 6 > 3;
console.log(typeof isPrint + " " + typeof isGreater);
//Arrays is a single object
var myNum = [1, 34, 56];
var mychar = ["A", "B", "C"];
console.log(
  typeof myNum + " " + typeof mychar + " " + myNum[0] + " " + mychar[0]
);
// Objects that model real life object
let dog = { name: "mike", age: 4 };
console.log(dog.name + " " + dog.age + " " + typeof dog);
//few highlights on const
let var1;
//Not allowed without assignment
// const data;
//reassignment not allowed in primitives
// const constcount = 12;
// constcount = 13;
//exceptions
const bird = { breed: "Fleming" };
console.log(bird.breed);
bird.breed = "Falcon";
console.log(bird.breed);
