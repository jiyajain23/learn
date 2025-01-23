// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


async function arrmap(arr) {
    for (const element of arr) {
        let x= await (new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(element*2)
            },500);          
        }))
    console.log(x)
    }
    
}
arr1=[2,3,4]
arrmap(arr1)