// if the given string is palindrome or not 

const palindrome = (str) => {

    str = str.toLowerCase();
    let reversedStr = str.split("").reverse().join("");

    if (str === reversedStr) {
        return true
    } else {
        return false
    }
}

console.log(palindrome("Madam"))
console.log(palindrome("Love"))