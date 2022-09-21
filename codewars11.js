// 6 KYU Playing With Digits

function digPow(n, p) {
    let nArr = Array.from(n.toString())
    console.log(nArr)
    let sum = 0
    for (let i = 0; i < nArr.length; i++) {
        sum += Math.pow(parseInt(nArr[i]), p)
        console.log(Math.pow(parseInt(nArr[i]), p))
        p += 1
    }
    if (sum / n % 1 != 0) {
        return -1
    }
    return sum / n
}