//   Problem: Give a number "n", find the first "n" elements of fibonacci sequence

const find_fibonacci_number = (n) => {
    const fib = [0, 1]

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(find_fibonacci_number(1))
console.log(find_fibonacci_number(3))
console.log(find_fibonacci_number(5))
console.log(find_fibonacci_number(7))
console.log(find_fibonacci_number(9))

// big o of fibonacci sequence is Big O(n)

