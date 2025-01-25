//The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function filterProducts(prod,filt){
    let newarr=[]
    for (const element of prod) {
        for (const key in element) {
                const element1 = element[key];
                if (element1==filt){
                    newarr.push(element)

                }
            }
        }
    return newarr
    }


let prod1={
    "name":"Lenovo laptop",
    "color":"grey",
    "price":"40000",
    "processor":"intel core i3"
}
let prod2={
    "name":"HP laptop",
    "color":"black",
    "price":"55000",
    "processor":"intel core i5"
}
let prod3={
    "name":"Dell laptop",
    "color":"white",
    "price":"75000",
    "processor":"intel core i7"
}

let products=[prod1,prod2,prod3]
filt1="40000"

console.log(filterProducts(products,filt1))