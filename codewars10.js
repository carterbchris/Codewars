// 5 KYU Product of consecutive Fib numbers
function productFib(prod, n1 = 1, n2 = 2) {
    let nextFib = n1 + n2
    if (n1 * n2 == prod) {
        return [n1, n2, true]
    } else if (n1 * n2 > prod) {
        return [n1, n2, false]
    } else {
        return productFib(prod, n2, nextFib)
    }
}