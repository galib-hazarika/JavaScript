//Block Level
{
  let x = 10;
  var name = "Galib";
  const PI = 3.14;
  console.log(x);
  console.log(name);
  console.log(PI);
}
console.log(name);
// console.log(x);
// console.log(PI); gives error
//Function Level Scoping and Global Scoping
let carName = "Volvo"; //Global Scoping
//function level scoping
function define() {
  let normalBoolean = true;
  var normalNumber = 10;
  const NUMBER = 234;
  console.log(normalBoolean);
  console.log(normalNumber);
  console.log(NUMBER);
}
/* Following commnads give error */
// console.log(normalBoolean);
// console.log(normalNumber);
// console.log(NUMBER);
