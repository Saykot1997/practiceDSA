// return the given sentence making capitalize

// SOLUTION 1
// const capitalize = (sentence) => {
//     const splitedSentence = sentence.toLowerCase().split(" ");
//     let capitalizeSentence;
//     const words = [];

//     for (let i = 0; i < splitedSentence.length; i++) {
//         const wordSplit = splitedSentence[i].split("");
//         let newWord = "";
//         for (let j = 0; j < wordSplit.length; j++) {
//             if (j === 0) {
//                 newWord += wordSplit[j].toUpperCase();
//             } else {
//                 newWord += wordSplit[j];
//             }
//         }
//         words.push(newWord);
//     }
//     capitalizeSentence = words.join(" ");
//     return capitalizeSentence;
// }

// big o of O(n squire)


// SOLUTION 2
const capitalize = (sentence) => {
    const splitedSentence = sentence.split(" ");
    const words = [];

    for (let i = 0; i < splitedSentence.length; i++) {
        const word = splitedSentence[i]
        if (word.length > 1) {
            words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
        } else {
            words.push(word[0].toUpperCase())
        }
    }
    return words.join(" ")
}

// big o of O(n)


console.log(capitalize("I LOVE CAT"))