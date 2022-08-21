//  Problem: Given an integer find the factorial of that integer
// in mathmatic factorial denote all number "*" les then or equal to the number

// first solution
const find_factorial = (n) => {
    const allNumbers = [];
    let factorial = 0

    for (let i = n; i > 0; i--) {
        allNumbers.push(i)
    }

    for (let i = 0; i < allNumbers.length; i++) {
        if (i === 0) {
            factorial = allNumbers[i] * allNumbers[i + 1]
        } else if (i === allNumbers.length - 2) {
            break
        } else {
            factorial = factorial * allNumbers[i + 1]
        }
    }
    return factorial
}

// secound solution
// const find_factorial = (n)=>{
//
//     if (n === 0) {
//         return 0
//     }
//     let result = 1
//     for (let i = 2; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }


// recursive solution
// const find_factorial = (n)=>{
//     if (n === 0) {
//         return 1
//     }

//     return n * find_factorial(n - 1)
// }

console.log(find_factorial(0))
console.log(find_factorial(5))
console.log(find_factorial(9))

// big o of factorial sequence is Big O(n)

