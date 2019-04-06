// This is also divide and conquer algorithm which divide array into smaller and merge together.
let unsortedArray = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

let merge = (leftArr, rightArr) => {
    let sortedArray = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr[0]);
            leftArr = leftArr.slice(1);
        } else {
            sortedArray.push(rightArr[0]);
            rightArr = rightArr.slice(1);
        }

    }

    while (leftArr.length) {
        sortedArray.push(leftArr.shift());
    }


    while (rightArr.length) {
        sortedArray.push(rightArr.shift());
    }

    return sortedArray;
}

let mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    } else {
        let midpoint = parseInt(arr.length / 2);
        let leftArr = arr.slice(0, midpoint);
        let rightArr = arr.slice(midpoint, arr.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

console.log('original Array is', unsortedArray);
console.log('original Array is', mergeSort(unsortedArray));