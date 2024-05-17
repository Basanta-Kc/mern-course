// function greeting() {
//   console.log("heello");
//   return;
// }

// const result = greeting();
// // console.log(result);

// function add(a, b = 6) {
//   return a + b;
// }
// // console.log(add(2, 3));
// // console.log(add(2));

// const anotherAdd = add;
// // console.log(anotherAdd(4, 5));
// // 1. function can be assigned to another varaible

// function highOrder(callback) {
//   console.log(callback(2, 3));
// }

// highOrder(add);

// function showMessage(from, text = anotherFunction()) {
//   // anotherFunction() only executed if no text given
//   // its result becomes the value of text
// }

// function showMessage(from, text) {
//   // If the value of text is falsy, assign the default value
//   // this assumes that text == "" is the same as no text at all
//   text = undefined || "no text given";
//   console.log(text); // 1 hello,
// }

// showMessage("basanta", "hellow");
// showMessage("basanta");

// function showCount(count) {
//   // if count is undefined or null, show "unknown"
//   alert(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

// function test() {
//   return "dfasdfadsfdafs";
// }

// console.log(test);

// const test2 = function(){

// }

// function add(){
//     let a = function(){
//         console.log(test)
//     }
//     return a;
// }

// const test = function () {
//   console.log(test);
// };

// function add(num1, num2) {
//   return num1 + num2;
// }

// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const add3 = (num1 , num2 ) => num1 + num2;

//console.log(this); // window object

// function normal() {
//   console.log(this, "from normal");
// }

// this.normal();

// const arrowFunc = () => {
//   console.log(this, "from arrow");
// };

// arrowFunc()

// let name = "basnata";
// let age = 10;

// function greet() {
//   console.log(`Hello, ${name}`);
// }

// const person = {
//   name: "basanta",
//   age: 10,
//   greet: function () {
//     console.log(this) // person
//     const anotherArrow = () => {
//         console.log(this) // person
//     }

//     return anotherArrow;
//   },
//   greetArrow: () => {
//     console.log(this) // window
//     console.log(`Hello, ${this.name}`);
//   }
// };

// // person.greet()
// // person.greetArrow()

// const functionInsideOfGreet = person.greet();
// functionInsideOfGreet()

const key = prompt("enter what information you want");

const person = {
  name: "basatna",
  age: 10,
  "shcool name": "NBHS",
};

console.log(person[key] ?? "wront value entered");

person?.key ?? "fdafdasf"

// const anotherPerson = person;

// anotherPerson.name = "basdnata kc";

// console.log(person["school name"])
