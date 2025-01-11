console.log("hello world")
var a = 20;
var b="Hello"
console.log(a+b)
console.log(a)
let st={
     "name":"jiya jain",
    "ph no":"986xxxx523",
    "marks":90
}
console.log(st)
console.log(typeof b)
st.state="delhi"
console.log(st)
let dict={
    "perdition":"punishment that lasts forever after death",
    "pristine":"unspoiled",
    "apologist":" a person who writes or speaks in defence of a cause"
}
console.log(dict)
let c=20;
let d=15;
let e = c>d ? c+d:d-c;
console.log(e)

for (let i = 0; i<=a; i++) {
    const element  =console.log(i)
}

for (const key in dict) {
        const element=dict[key]
        console.log(element)
    }
for (const element of "jiya") {
    console.log(element);
}

while (a<30){
    console.log(a)
    a++;
}

function sum(a,b){
    return a+b
}
console.log(sum(2,3))

const func1 =(a,b,c) =>{
    console.log(a*b*c)
}

func1(3,4,5)
console.log(Math.round((Math.random)*3))