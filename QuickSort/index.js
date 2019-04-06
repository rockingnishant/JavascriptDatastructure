//Quick Sort is a divide and conquer algorithm. It first divide the Array by choosing Pivot and then combining together.

let quickSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    } else {
        let [pivot, ...rest] = arr;
        let left = [], right = [];

        rest.forEach(element => {
            element < pivot ? left.push(element) : right.push(element);
        });

        return quickSort(left).concat(pivot).concat(quickSort(right));

    }

}
let array = [20, 10, 30, 5, 7, 40, 60];
let sortedArray = quickSort(array);

console.log("Original Array", array);
console.log("Sorted Array", sortedArray);