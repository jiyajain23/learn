//#random color and background color
var c1 = "red"
var c2 = "blue"
var c3 = "yellow"
var c4 = "orange"
var c5 = "pink"

let rand = Math.random()
// var c=null
if (rand <= 0.2) {
    var c = c1
}
else if(rand <= 0.4 && rand > 0.2) {
    var c = c2;
}
else if(rand <= 0.6 && rand > 0.4) {
    var c = c3;
}
else if(rand <= 0.8 && rand > 0.6) {
    var c = c4;
}
else {
    var c = c5;
}
let rand1 = Math.random()
// var bc=null
if (rand1 <= 0.2) {
    var bc = c1;
}
else if(rand1 <= 0.4 && rand1 > 0.2) {
    var bc = c2;
}
else if(rand1 <= 0.6 && rand1 > 0.4) {
    var bc = c3;
}
else if(rand1<= 0.8 && rand1 > 0.6) {
    var bc = c4;
}
else{
    var bc = c5;
}


let rand2=Math.random()
// var b = null
if (rand2 <= 0.2) {
    var b = document.body.firstElementChild.children[0]
}
else if(rand2 <= 0.4 && rand2 > 0.2) {
    var b = document.body.firstElementChild.children[1]
}
else if(rand2 <= 0.6 && rand2> 0.4) {
    var b = document.body.firstElementChild.children[2]
}
else if(rand2 <= 0.8 && rand2 > 0.6) {
    var b = document.body.firstElementChild.children[3]
}
else {
    var b = document.body.firstElementChild.children[4]
}
b.style.color=c
console.log("b.style.color=c")
b.style.backgroundColor=bc
console.log("b.style.b=bc")
