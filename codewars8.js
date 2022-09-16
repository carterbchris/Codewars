// 6 KYU Count Characters in String
function count(string) {
    if (!string) {
        return {};
    }
    let letters = {}
    let stringArr = Array.from(string)
    stringArr.forEach(char => {
        if (!letters.hasOwnProperty(char)) {
            letters[char] = 1
        } else (
            letters[char] += 1
        )
    })
    return letters
}