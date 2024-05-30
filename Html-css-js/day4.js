// const arr = [1, 3, 3, 4, 3];

// let student = {
//   name: "basanta",
//   age: 10,
//   education: {
//     school: 'nbhs',
//     college: 'morgan',
//   }
// };

// // const name = student.name
// // const age = student.age
// student.education.school;

// const { name: studentName, age, education: { school} } = student;

// console.log();

// function add(a,b){
//     const a = 2,
//     const b = 3;
//     console.log(a,b)
// }

// add(2,3)
// function printStudentDetails(std) {
//   console.log(std.name, std.age);
// }

function printStudentDetailsDestructing({ name: stdname, age, ...rest }) {
  console.log(stdname, age);
}

// printStudentDetails(student);
// printStudentDetailsDestructing(student);
// student = null;

// delete student.name
// const obj = new Object()

// for (const key in student) {
//   console.log(student[key]);
// }

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student)); [[key,value]]

// const student = {
//   name: "basanta",
//   age: 10,
//   profession: 'teacher',
//   education: {
//     school: "nbhs",
//     college: "morgan",
//   },
// };

// spread operator
// const anotherStudent = { name: student.name, age: student.age, rest: {}}
// const anotherStudent = { ...student };
// const { name, age, ...restOftheProperty } = student;

// console.log(restOftheProperty)

// console.log(student.name)
// console.log(student.age);

// const stdName = student.name;

// const {
//   name: stdName,
//   age,
//   education: { school },
// } = student;

// console.log(stdName, age, school);

// let a=2, b= 3;
// function add(a,b){
//     return a +b;
// }

// add(2,3)

// const obj = { name: 'dfadf'}
// const obj2 = obj
// obj1.name = 'dfasfdads'

// // const {name, age} = student;
// const std = student;
// function printStudentDetailsDestructing(std) {
//   std.name = 'basanta kc'
// }

// printStudentDetailsDestructing(student)

// console.log(student)

// function sumAll(...args) {
//     console.log(args)
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
//}

// sumAll(1,2,3,4)

// const arr = [1,2,3,3]

// // const frist = arr[0]
// // const second = arr[1]
// const [first,second,...rest] = arr;

// console.log(first, second, rest)

// const numbers = [1, 3, 34, 343, 43, 20000];

// const doubleTheGivenNum = (num) => {
//   return num * 2;
// };
// const doubleNumber = numbers.map(doubleTheGivenNum);
// const bigNumbersGreaterThan300 = numbers.filter((num) => num > 300);
// const sum = numbers.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// numbers.forEach((num) => {
//     console.log(num)
// })

// const num = numbers.find((num) => num > 300);

// console.log(num);

const students = [
  { name: "basanta", school: "nbhs" },
  { name: "ashok", school: "nbhs" },
  { name: "ashok", school: "morgan" },
  { name: "ashok", school: "budanilkantha" },
  { name: "marsha", school: "budanilkantha" },
  { name: "nischal", school: "budanilkantha" },
  { name: "ashok", school: "budanilkantha" },
];


const studentsOfBudanilkanths = students.filter(({school}) => {
    return school === 'budanilkantha'
})

console.log(studentsOfBudanilkanths)