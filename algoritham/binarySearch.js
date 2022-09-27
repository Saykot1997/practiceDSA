// Problem : Given a sorted array of "n" elements and a terget element "t" find the index of "t" in the array. Return -1 if
// the target element is not found.

const binarySearch = (array, n) => {
    if (!array.length > 0) {
        return -1
    }
    let leftPointer = 0
    let rightPoinert = array.length - 1

    while (leftPointer <= rightPoinert) {
        let midPointer = Math.floor((leftPointer + rightPoinert) / 2);
        if (array[leftPointer] === n) {
            return leftPointer
        } else if (array[rightPoinert] === n) {
            return rightPoinert
        } else if (array[midPointer] === n) {
            return midPointer
        } else {
            if (n > array[midPointer]) {
                leftPointer = midPointer + 1
            } else {
                rightPoinert = midPointer - 1
            }
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))
console.log(binarySearch([], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))