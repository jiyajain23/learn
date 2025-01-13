//Factorial
const mul =(a,b)=>a*b
let n=prompt("Enter number")
let arr=[]
for (let i = 1; i<= n; i++) {
    arr.push(i)
    
}
let f= arr.reduce(mul)
console.log(f)
alert(`The factorial of ${n} is ${f}`)
