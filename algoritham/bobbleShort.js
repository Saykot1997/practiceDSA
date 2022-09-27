const bblSort = (arr) => {
    let swaped = false
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swaped = true
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        if (swaped) {
            break
        }
    }
    return arr
}

const arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bblSort(arr))
