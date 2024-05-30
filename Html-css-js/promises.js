// promise

// const promiseResovle = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('age must '));
//   }, 5000);
// });

// // const promiseReject = new Promise((resolve, reject) => {
// //     reject('not ok')
// // })

// console.log(promiseResovle)
// promiseResovle
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log('promise rejected')
//     console.log(err);
//   });

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     resolve({ name: "basanta", age: 10 });
//   });
// }

// async function test(){
//     const basanta = await fetchUserData()
//     console.log(basanta)
// }

// test()


// const data = fetchUserData();
// data.then((value) => {
//     console.log(value)
// })

// fetch("https://api.github.com/users/Basanta-Kc").then((res) => {
//   const data = res.json();
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("https://api.github.com/users/Basanta-Kc")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     fetch(data.followers_url)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   });

// const res = await fetch("https://api.github.com/users/Basanta-Kc");
// const data = await  res.json()

  async function getGithubUserDataByUserName(){
    const res = await fetch("https://api.github.com/users/Basanta-Kc");
    const data =await res.json()
    const followersRes = await fetch(data.followers_url)
    const floowersData = await followersRes.json()
  }

  getGithubUserDataByUserName()

  // Creat input filed to ask github username = 
  // fetch data
  