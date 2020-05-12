// const reg = /^[0](\.\d{1,4})?$/
const reg1 = /^() | (100) | ()$/
const str = /^([1-9]{1,2}\d{0,2}(\.\d{1,4})?|100|[0](\.\d{1,4})?)$/

function test(number) {
    return reg1.test(number) || reg1.test(number)
}
// console.log(test(1.2));
// console.log(test(0.2125));
// console.log(test(10.02125));
// let reg = /^(1|2|3)$/
// console.log(reg.test(1));
// console.log(reg.test(2));
// console.log(reg.test(3));


let list = [{
    code: 12
}, {
    code: 13
}, {

}, {
    code: ''
}]

// console.log(list.reduce((total, cur) => {
//     console.log(total);

//     const {
//         code = 0
//     } = cur
//     return total + code
// }), 0)

let number = list.reduce((total, cur) => {
    console.log(total);
    const {
        code = 0
    } = cur
    return total + code
}, 0)

console.log(number);


let arr = [{
    a: 2
}, {
    a: 1
}, {
    a: 3
}]

for (const {
        a
    } of arr) {
    console.log(a)
}

function toStr(test) {
    return
}