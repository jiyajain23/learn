// Q9 The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type) {
    let a=Math.random()*Math.random()
    let x= await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Your ${type} is ready!!`)
        },a*10000);
        
    })
    console.log(x)
}

brewCoffee("Cappucino")