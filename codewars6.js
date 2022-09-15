// 7 KYU Shortest Words
function findShort(s) {
    let arr = s.split(' ')
    let sorted = arr.sort((a, b) => { return a.length - b.length })
    return (sorted[0].length)
}