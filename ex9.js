//Faulty Calculator//
let i = Math.random()
let a={
    "+":"-",
    "-":"*",
    "*":"+",
    "/":"**"
}
let c = prompt("enter first number")
let d = prompt('enter second number')
let e= prompt("enter operation")

if (i > 0.1) {
    e=a[e]
    alert(`The result is ${eval(`${c} ${e} ${d}`)}`)
}

else {
 alert(`The result is ${eval(`${c} ${e} ${d}`)}`)
}