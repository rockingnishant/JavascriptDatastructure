reverse = (string) => {
   // console.log("Original String is..." + string)
    //let array = [1,2,3]
    //return string.split('').reverse().join('');
    //return [...string].reverse().join('');
    return Array.from(string).reverse().join('')
    
    //console.log("Reverse String is..."+array.reverse().join())
}

//console.log(reverse("hello"))

//reverse without using any function
reverse2 = (string) => {
    let reverse = "";
    // using for each
    // [...string].forEach(element => {
    //     reverse=element+reverse
    // });

    for (let char of string) {
        reverse = char + reverse
    }

    return reverse
}

checkPelindrom = (str) => {
    console.log("String is........",str)
    console.log("Revserse=======",reverse(str))
   
    if (reverse(str) === str) {
        return "String is palindrome";
    } else {
        return "String is not a palindrome";
    }

}

console.log(checkPelindrom('hello')) //Not Palindrome
console.log(checkPelindrom('abba'))  //palindrome

