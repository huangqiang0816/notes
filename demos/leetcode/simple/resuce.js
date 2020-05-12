Array.prototype.myReduce = function (callback, initialValue) {
    let value = null
    let o = Object(this)
    var len = o.length >>> 0;
    var k = 0;
    if (arguments.length >= 2) {
        value = arguments[1];
    } else {
        while (k < len && !(k in o)) {
            k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
            throw new TypeError('Reduce of empty array ' +
                'with no initial value');
        }
        value = o[k++];
    }
    console.log(value);

    while (k < len) {
        if (k in o) {
            value = callback(value, o[k], k, o);
        }
        k++
    }
    return value
}

let arr = [1, 2, 3, 4]
let numbers = arr.myReduce(function (total, cur) {
    return total + cur
})
console.log(numbers);


// let numbers = [1, 2, 3].reduce(function (total, cur) {
//     return total + cur
// }, 0)