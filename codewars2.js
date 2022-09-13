// 6 Kyu Sum of Digits/Digital Root
function digital_root(n) {
    let sum = 0
    let str = n.toString()


    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
        let sumStr = sum.toString()
        if (sumStr.length >= 2) {
            sum = parseInt(sumStr[0]) + parseInt(sumStr[1])
        }
    }
    return sum
}