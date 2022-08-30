const linear_search = (arr, n) => {

    if (!arr.length > 0) {
        return -1
    }

    let position = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            position = i
        }
    }
    return position
}


console.log(linear_search([3, 4, 6, 8, 32], 6))
console.log(linear_search([3, 4, 6, 8, 32], 10))
console.log(linear_search([3, 4, 6, 8, 32], 32))
console.log(linear_search([], 32))


// Big o of algorithom is O(n) 