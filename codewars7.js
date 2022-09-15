// 6 kyu Create Phone Number
function createPhoneNumber(numbers) {
    let out = numbers.join("")
    return "(" + out.slice(0, 3) + ") " + out.slice(3, 6) + "-" + out.slice(6)
}