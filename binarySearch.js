// Problem : Given a sorted array of "n" elements and a terget element "t" find the index of "t" in the array. Return -1 if
// the target element is not found.


const binarySearch = (array, n) => {

    if (!array.length > 0) {
        return -1
    }
    if (array[Math.ceil((array.length - 1) / 2)] === n) {
        return Math.ceil((array.length - 1) / 2)
    } else if (array[Math.ceil((array.length - 1) / 2)] > n) {
        let newArray = array.slice(0, Math.ceil((array.length - 1) / 2))
        return binarySearch(newArray, n)
    } else {
        let newArray = array.slice(Math.ceil((array.length - 1) / 2), array.length - 1)
        return binarySearch(newArray, n)
    }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))
// console.log(binarySearch([], 3))

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)