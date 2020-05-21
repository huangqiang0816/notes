// [['A','B', 'C'], ['a','b', 'c'], [1, 2]]，输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']

let arr = [
    ['A', 'B', 'C'],
    ['a', 'b', 'c'],
    [1, 2]
]

let calculate = function (arr) {
    let result = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i].length
    }

    return result
}