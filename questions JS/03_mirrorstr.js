
// Q3 The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function MM(str){
    let newstr=str;
    for (let index = str.length; index>0; index--) {
        const element = str[index-1];
        newstr+=element
            
    }
    console.log(newstr)  
}
   
str1="SHEETAL"
MM(str1)
