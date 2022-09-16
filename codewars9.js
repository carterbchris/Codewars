// 6 KYU Duplicate Encoder

function duplicateEncode(word) {
    let lword = word.toLowerCase()
    let result = ""
    for (let i = 0; i < lword.length; i++) {
        let tempArr = lword.slice(i + 1).concat(lword.slice(0, i))
        tempArr.includes(lword[i]) ? result += ")" : result += "("
    }
    return result
}