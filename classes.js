// prototypal inheritance
// const person = {
//     name: 'basanta',
//     age: 10,
//     greet: function(){
//         console.log('hello')
//     }
// } // new Object(), new Array()

// // console.log(person)

// // console.log(person.hasOwnProperty('name'))

// const student = {
//     study: function(){
//         console.log('lets studey')
//     },
//     school: 'nbhs'
// }
// student.__proto__ = person

// student.greet()

// console.log(student)

// const numbers = [1,2,3] // new Array()

// console.log(numbers)
// console.log(numbers.map((num) => num *2))

// const basanta = {
//     name: "basanta",
//     age: 10,
//     greet: function(){
//         console.log('helloo')
//     }
// }

// const nichal = {
//     name: 'nishcahl',
//     age: 10,
//     greet: function(){
//         console.log('helooo')
//     }
// } => proto => Object

// new Object(), new Array(), new Perwson()
// const person  = {}
// person.name = 'basanta'

// function User(name, age){
//     // 1. this = {}
//     this.name = name;
//     this.age = age
//     // Multiple copies will be created
//     // this.greet = function(){
//     //     console.log('helloo')
//     // }

//     // return this;
// }

// User.prototype.greet = function(){
//     console.log('hello')
// }

// function AdminUser(name, age, accessLevel){
//     User.call(this, name, age)
//     this.accessLevel = accessLevel;
// }

// Object.setPrototypeOf(AdminUser.prototype, User.prototype);

// const basanta = new User('basnata', 10);
// const nischal = new User("nishcal", 10);
// const abhishek = new AdminUser('abhishek', 20, 10)

// abhishek.greet()

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("heloo")
    }
}

class AdminUser extends User {
    constructor(name,age, accessLevel){
        super(name, age)
        this.accessLevel = accessLevel
    }
}

const nischal = new AdminUser('nischal', 10, 2)

nischal.greet()

