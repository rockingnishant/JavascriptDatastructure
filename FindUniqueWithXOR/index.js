let array1 = [ 3, 5, 4, 5, 3, 4,7] //output 7
let array2 = [12, 1, 12, 3, 12, 1, 1, 2, 3, 3] //output 2
let array3=[10, 20, 10, 30, 10, 30, 30] //output 20

let findUnique = (array,size) => {
    let res  = array[0];
    console.log("res",res)
    console.log("size",size)

    for (let i = 1; i < size; i++) {
        res = res ^ array[i]
    }

    return res > 0 ? res : -1
}
//console.log("Unique Number IS", findUnique(array2))
//console.log("Unique Number IS", findUnique(array1))
console.log("Unique Number IS", findUnique(array1,array1.length))

