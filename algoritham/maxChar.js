// fine the charecter which is used max or most in the staring or number

const maxChar = (char) => {

    let splitStr = char.toString().split("");
    const latersUsed = {}

    for (let i = 0; i < splitStr.length; i++) {
        if (latersUsed[splitStr[i]]) {
            latersUsed[splitStr[i]] += 1
        } else {
            latersUsed[splitStr[i]] = 1
        }
    }



    let high = 0
    let cr;

    for (let car in latersUsed) {
        //console.log(car, latersUsed[car]);
        if (latersUsed[car] > high) {
            high = latersUsed[car]
            cr = car;
        }
    }

    return cr;
}

console.log(maxChar("jamaillaaaaaa"))