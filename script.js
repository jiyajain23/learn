//PS6 Q1,2,3,4

// function check() {
//     let age = prompt("enter Age")
//     if (age >= 18) {
//         console.log("You Can Drive")
//         alert("You Can Drive!!")
//     }
//     else if (age < 0) {
//         alert("Negative age cannot be entered")

//     }
//     else if (age>4){
//         location.href="https://google.com"
//     }
//     else {
//         console.log("You Cannot Drive")
//         alert("You Cannot Drive!!")
//     }

// }
// check()
// var i=0;
// while (i==0){
//     if (confirm("Press Ok to enter age again") == true) {
//         check()
//     }
//     else{
//         i=1
//     }

// }


//PS6 Q5
/*
var c=prompt("Enter A color")
document.body.style.backgroundColor=c
*/


//#PROMISES
// let prom1 = new Promise((resolve, reject) => {
//     a = Math.random()
//     if (a > 0.5) {
//         setTimeout(() => {
//             resolve("Done")
//         }, 1000);

//     }
//     else {
//         reject("oh No")
//     }
// })

// prom1.then((a) => {
//     console.log(a)

// }).catch((err) => {
//     console.log(err)
// })

// let prom2 = new Promise((resolve, reject) => {
//     a = Math.random()
//     if (a > 0.5) {
//         setTimeout(() => {
//             resolve("Done 2")
//         }, 1200);

//     }
//     else {
//         reject("oh No 2")
//     }
// })

// prom2.then((a) => {
//     console.log(a)

// }).catch((err) => {
//     console.log(err)
// })


// let prom3 = new Promise((resolve, reject) => {
//     a = Math.random()
//     if (a > 0.5) {
//         setTimeout(() => {
//             resolve("Done 3")
//         }, 2000);

//     }
//     else {
//         reject("oh No 3")
//     }
// })

// prom3.then((a) => {
//     console.log(a)

// }).catch((err) => {
//     console.log(err)
// })
// let prom4 = new Promise((resolve, reject) => {
//     a = Math.random()
//     if (a > 0.5) {
//         setTimeout(() => {
//             resolve("Done 4")
//         }, 3000);

//     }
//     else {
//         reject("oh No 4")
//     }
// })

// prom4.then((a) => {
//     console.log(a)

// }).catch((err) => {
//     console.log(err)
// })

// let p5 = Promise.race([prom1, prom2, prom3, prom4])

// p5.then((a) => {
//     console.log(a)

// }).catch((err) => {
//     console.log(err)
// })




//SIMULATION OF GETTING DATA
// async function getdata() {
//    x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    return x.json()
// }
// async function main() {
//     console.log("Loading...")
//     console.log("Getting Modules")
//     let data = await getdata()
//     console.log(data)
//    console.log("done")
// }

// main()

// const animal={
//     "eats":"very much",
//     "runs":"fast"
// }

// console.log(animal.eats)

// const bunny={
//     "food":"carrot"
// }
//bunny.__proto__=animal;

// class animals{
//     constructor(name){
//         this.name=name
//         console.log("created")

//     }

//     eats(){
//         console.log("eats veggies")
//     }
//     runs(){
//         console.log("runs very fast")
//     }
// }


// let a = new animals("bunny")
// console.log(a)