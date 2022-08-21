// reverse the given string

const solution1 = (str) => {
    return parseInt(str.toString().split("").reverse().join(""))
}

const solution2 = (str) => {
    str = str.toString()
    let reverseStr = "";
    let splitStr = str.split("");

    for (let i = splitStr.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + splitStr[i]
    }
    return parseInt(reverseStr)
}

const solution3 = (str) => {
    return str.toString().split("").reduce((outPut, char) => {
        outPut = char + outPut
        return parseInt(outPut);
    }, "")
}



// console.log(solution3(-67))
// console.log(solution2(-34))
console.log(solution1(-32))


