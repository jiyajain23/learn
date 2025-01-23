
// Q2 The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function DT(arr){
    let newarr=[];
    for (const element of arr) {
        if (newarr.includes(element)){
                null
        }
        else{
            newarr.push(element) 
        }
    }
    let finarr=[]
    for (const element of newarr) {
        finarr.push(element,element)
        
    }
    console.log(finarr)
}

arr1=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0]
DT(arr1)
