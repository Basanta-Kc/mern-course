const student = {
  name: "basanta",
  age: 10,
  education: {
    school: "nbhs",
    plusTwo: "morgan",
    bachelor: "asian",
  },
};

// const { name, ...restOfTheProperties } = student;
// console.log(restOfTheProperties)

// //const newStudent = {name: student.name, age: student.age}
// const newStudent = { ...student };

// newStudent.name = 'basanta kc';
// newStudent.education.school = 'another'

// console.log(student)

// const name = "ashok";

// const name = student.name;
// const age = student.age
// const bachelor = student.education.backherlo
// const {
//   name: anotherVarName,
//   age,
//   education: { bachelor },
// } = student;

// console.log("Name", name);
// console.log("Age", age);
// console.log("Bachelor", bachelor);

// const { name } = student;
// function printStudentDetail({ name, age, education: { bachelor } }) {
//   //   const age = std.age;
//   //   const bachelor = std.education.bachelor;

//   console.log(name);
// }

// printStudentDetail(student);
// const obj = new Object()
// const obj2 = {}

// const numbers = [1,3,4,2,34];

// for(const [key, value] of Object.entries(student)){
//     console.log(num)
// }

// for(const key in student){
//     console.log(key)
//     console.log(student[key])
// }

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student));
// [
//     ['key','value']
// ]

// function add([first, second]){
//     console.log(args)
// }

// add([1,3,4,3,4,34,343,343,3434])

// const firstNumber = numbers[0];
// const secondNUmber = numbers[1];

// const [first, second,, ...rest] = numbers;
// console.log(first, second, rest);

// push, pop, shift, unshift, slice, splice

const numbers = [1, 3, 5, 2, 34];

// const doubleTheGivenNum = (num) => num * 2;

// const doubleNumbers = numbers.map((num, index) => {
//     console.log(num, index)
//     return num * 2;
// })
// console.log(doubleNumbers)

// const numsGreaterThan5 = numbers.filter((num) => num > 5)
// console.log(numsGreaterThan5);

// const result = numbers.find((num) => {
//     return num === 5
// })
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 48 },
  { name: "David", score: 74 },
  { name: "Eve", score: 68 },
];

const sum = students.reduce((prev, curr) => {
  return prev + curr.score;
}, 0);

console.log(sum);
// const sum = numbers.reduce((prev, curr) => {
//     return prev + curr
// }, 20)

// console.log(sum);
