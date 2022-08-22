// write a program that console.log the number
// but if number divide by three print fizz 
// if if number divide by five print buzz 
// if the numver divide by both five and three print fizzbuzz 

const fizzbuzz = (n) => {
    n = parseInt(n);

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(15)
