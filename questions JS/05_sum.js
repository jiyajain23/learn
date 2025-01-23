// Q5 The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(arr){
    let newarr=[]
    for (const element of arr) {
        if(element>0){
             newarr.push(element)
        }
        else{
            break
        }

    }
    console.log(
    newarr.reduce((a,b)=>{
        return a+b
    }
    ))
}
  
arr1=[1,2,3,4,5,6,-9,10]
sum(arr1)