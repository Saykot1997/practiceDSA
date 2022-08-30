
// first solution
// const chank = (array, ch) => {

//     const result = [];
//     let chankArray = [];

//     for (let i = 0; i < array.length; i++) {

//         chankArray.push(array[i])

//         if (((i + 1) % ch) === 0) {
//             result.push([...chankArray])
//             chankArray = [];
//         }

//         if (i === array.length - 1) {
//             result.push([...chankArray])
//         }
//     }

//     return result
// }


// secound solution

const chank = (array, ch) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        let chankArray = result[result.length - 1];

        if (!chankArray || chankArray.length === ch) {
            result[result.length] = [array[i]]
        } else {
            chankArray.push(array[i])
        }
    }
    return result
}

console.log(chank([1, 2, 3, 4, 5, 6, 7, 8], 2))