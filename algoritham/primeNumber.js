// Problem : Given a natural number "n" determine the number is prime or not

const isPrime = (n) => {

    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(9))
console.log(isPrime(11))

// big o of prime is Big O(n) 