// Q1 The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


function MagHat(arr){
    let Gryffindor=[];
    let Hufflepuff=[];
    let Ravenclaw=[];
    let Slytherin=[];
    for (const element of arr) {
        if (element.length<6){
            Gryffindor.push(element)
        }
        else if (element.length<8){
            Hufflepuff.push(element)
        }
        else if (element.length<12){
            Ravenclaw.push(element)
        }
        else{
            Slytherin.push(element)
        }
    }
    console.log(`Gryffindor= ${Gryffindor}`)
    console.log(Ravenclaw)
    console.log(Hufflepuff)
    console.log(Slytherin)
}

arr1=["jiya","muskaan","hriday","siya","ishita","dhruv","shubham","vaishnavi","bulbulkalini"]
MagHat(arr1)
