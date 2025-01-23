// Q6 The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vow(str){
    let arr=str.split('')
    let num=0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let vowels=["a","e","i","o","u","A","E","I","O","U"]
        if (vowels.includes(element))
        {
            num+=1
        }
        else{
            continue
        }
        
    }
    console.log(num)
}

str1="DEEPAK"
vow(str1)
