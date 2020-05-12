/*
    判断扑克牌的顺子

    从扑克牌中随机抽5 张牌，判断是不是一个顺子，即这五张牌是不是连续的，
    2~10为数字本身，A为1,J为11，Q为12，K为13，而大、小王为0，可以看成任意数字、A不能视为14
*/

let shunZi = function (arr) {
    let isShun = true
    let map = new Map()
    let newArr = arr.sort()
    let pickArr = []
    let KingCount = null // 大小王的数量
    for (var i = 0; i < newArr.length; i++) {
        let cur = arr[i]
        if (cur === 0) { // 王的数量
            KingCount += 1
        } else if (!map.has(cur)) {
            map.set(cur, '1')
            pickArr.push(cur)
        }
    }
    if (pickArr.length + KingCount !== arr.length) {
        isShun = false
    }
    let pickLen = pickArr.length
    for (var i = 0; i < pickLen - 1; i++) {
        let cur = pickArr[i]
        let next = pickArr[i + 1]
        if (next - cur === 1) {} else if (next - cur === 2 && KingCount > 0) {
            KingCount--
        } else if (next - cur === 3 && KingCount > 1) {
            KingCount -= 2
        } else {
            isShun = false
            break
        }
    }

    return isShun

}

let isStraight = function (nums) {
    const minSort = nums.sort((a, b) => a - b)

    let sum = 0;

    for (let i = 0; i < 4; i++) {
        if (minSort[i] === 0) {
            continue
        } else if (minSort[i + 1] === minSort[i]) {
            return false
        } else {
            sum += (minSort[i + 1] - minSort[i])
        }
    }
    return sum < 5
}
isStraight([1, 2, 3, 4, 6])