// 6 Kyu Take a Ten Minute Walk
function isValidWalk(walk) {
    const directions = {
        n: 1,
        s: -1,
        e: 1,
        w: -1
    }
    let horizontal = 0
    let vertical = 0

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] == 'n' || walk[i] == 's') {
            vertical += directions[walk[i]]
        } else {
            horizontal += directions[walk[i]]
        }
    }

    return (walk.length == 10 && horizontal == 0 && vertical == 0)

}