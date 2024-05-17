// // console.log(add(2,3))
// // function add(num1, num2) {
// //   return num1 + num2;
// // }

// // const result = add(2);

// // console.log(result); // undefined

// // addV2(4,5)
// // const addV2 = function (num1, num2) {
// //   return num1 + num2;
// // };

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// // const addOneLiner = (num1, num2) => num1 + num2

// // const anotherAdd = add; // function passed as a value

// // function test(){
// //     let b = function(){
// //         console.log('dfadsfsad')
// //     };
// //     return b;
// // }

// // let c = function(){

// // }

// // add(c,3)

// function callback(){
//     console.log("i am passed as an argument")
// }

// function greet(){
//     console.log('helooo')
// }

// function highOrder(cb){
//     cb()

//     return cb;
// }

// highOrder(greet)

// console.log(this)

// function add(num1, num2) {
//   console.log(this);
// }

// // window
// const addArrow = (num1, num2) => {
//     console.log(this)
// }

// add(2,3)
// addArrow()

// const student = {
//   name: "nayak",
//   greet: function () {
//     // studnet = this
//     let b = () => {
//         console.log(this)
//     }
//     b()
//   },

//   greetArrow: () => {
//     console.log(this);
//   },
// };

// student.greet()
// const person = {
//   name: "basanta",
//   age: 20,
//   school: "nbhs",
// };

// function askQuestion() {
//   const input = prompt("what information you want?");
//   result = person[input] ?? "Wrong input";
//   alert(result);
//   if (result === "Wrong input") askQuestion();
// }


// askQuestion()

// console.log(this)
const student = {
  name: 'basnata',
  printName(){
    const printInsideArrow = () => {
      console.log(this)
    }
    printInsideArrow()
  },
  printNameArrow: () => {
    console.log(this)
  }
}

student.printName()