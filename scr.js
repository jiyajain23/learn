
// var a = 20;
// var b="Hello"

// let st={
//      "name":"jiya jain",
//     "ph no":"986xxxx523",
//     "marks":90
// }
// console.log(st)
// console.log(typeof b)
// st.state="delhi"
// console.log(st)
// let dict={
//     "perdition":"punishment that lasts forever after death",
//     "pristine":"unspoiled",
//     "apologist":" a person who writes or speaks in defence of a cause"
// }
// console.log(dict)
// let c=20;
// let d=15;
// let e = c>d ? c+d:d-c;
// console.log(e)


// for (const key in dict) {
//         const element=dict[key]
//         console.log(element)
//     }
// for (const element of "jiya") {
//     console.log(element);
// }

// while (a<30){
//     console.log(a)
//     a++;
// }

// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3))

// const func1 =(a,b,c) =>{
//     console.log(a*b*c)
// }

// function marks(obj){
//     for (const key in obj) {
//             const element = obj[key];
//             console.log(element)

//         }
// }
// let obj1={
//     "harry":98,
//     "rohan":90,
//     "Akash":77
// }

// function tr (n) {
//     n=prompt("Enter a Number")
//         if (n==6) {
//             alert("Correct")
//          }
//         else{
//             alert("Try Again")
//             console.log("Try Again")
//             tr()
//         }

// }
// tr()

// const mean=(o,t,th,f,fi) =>{
//     let m= (o+t+th+f+fi)/5
//     console.log(`the mean is ${m}`)
// }
// mean(20,30,10,20,20)

// let arr = []
// let a = prompt("how many inputs do you want to add?")
// let i=0;
// while (i < a){
//     let b = prompt("Enter ")
//     arr.push(b)
//     i++

// }
// alert(`Your array is [${arr}]`)
// console.log(arr)
// arr=[2,3,10,20,30,44,50]
// function div(arr){
//   return arr%10==0
// }
// console.log(arr.filter(div))

// const mul =(a,b)=>a*b
// let n=prompt("Enter number")
// let arr=[]
// for (let i = 1; i<= n; i++) {
//     arr.push(i)
    
// }
// console.log(arr.reduce(mul))
//async function x(){
//   return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("This promise has been rejected")
//         }, 3000);
//     })
// }
// async function prom() {
//     console.log("SOMETHING")
//     dta= await x().catch((err)=>{
//         console.log(err)
//     })
//     console.log("done")
// }
// prom()
// var prom1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("one done")
//     }, 2000);
//  
// })
// var prom2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return (resolve("two done"))
//     }, 2000);
//  
// })
// var prom3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return (resolve("three done"))
//     }, 2000);
//  
// })
// async function threeproms () {
//     let x= await Promise.all([prom1,prom2,prom3])
//     console.log(x)
//     console.log("done")
// }
// threeproms()
// async function x () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("45")
//         },1000);
//     })
// }
// (async function y () {
//     let a= await x()
//     console.log(a)
//     let b= await x()
//     console.log(b)
//  
// })()
// let [a,b,...rest]=[1,2,3,4,5,6,7,8,9]
// console.log(a,b,rest)
//const obj={
//     a:1,
//     b:2,
//     c:3}
// const {a,b}= obj;
// console.log(a,b)
// const n="hey";
// const m ="no"
// const o={m,n}
// console.log(o)


//PS11  
// q1

// class complex{
//     constructor(real,im){
//         this.real=real,
//         this.im=im
//     }
//     num(){
//         console.log(`complex number is ${this.real}+${this.im}i`)
//     }

// }
// let a = new complex(3,4)
// console.log(a)
// console.log(a.num())

//
/*PS 12 
q2*/
// function average(...numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
  
//     const sum = numbers.reduce((acc, num) => acc + num);
//     return sum / numbers.length;
//   }
//   let arr1=[0,1,2,3,4,5,6,7,8,9]
//   console.log(average(1, 2, 3, 4, 5)); // Outputs: 3
//   console.log(average(...[10, 20, 30])); // Outputs: 20
//   console.log(average(...arr1)) 


/*q3*/
(function jj() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return console.log(resolve("resolved"))
        },1000);
    })
    
})()
