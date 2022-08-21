// reverse the given string

const solution1 = (str) => {
    return str.split("").reverse().join("")
}

const solution2 = (str) => {
    let reverseStr = "";
    let splitStr = str.split("");

    for (let i = splitStr.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + splitStr[i]
    }
    return reverseStr
}

const solution3 = (str) => {
    return str.split("").reduce((outPut, char) => {
        outPut = char + outPut
        return outPut;
    }, "")
}



console.log(solution3("eat"))
// console.log(solution2("eat"))
// console.log(solution1("eat"))


