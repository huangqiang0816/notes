// 4-27

// 成立？
fn(n) = fn(n - 1) + fn(n - 2)

function fibnacci2(n) {
    if (n == 0) {
        return 0
    }
    let a1 = 0
    let a2 = 1
    for (let i = 1; i < n; ++i) {
        [a1, a2] = [a2, a1 + a2]
    }
    return a2
}

function fibnacci1(n) {
    return n <= 0 ? 0 : n == 1 ? 1 : fibnacci1(n - 2) + fibnacci1(n - 2)
}

fibnacci1(10) === fibnacci1(9) + fibnacci1(8)

// 递归法==
function fibnacci3(n) {
    if (n < 2) {
        return n
    }
    return fibnacci3(n - 1) + fibnacci3(n - 2)
}
// 递归加记忆法
function fibnacci4(n, memory = []) {
    if (n < 2) {
        return n
    }
    if (!memory[n]) {
        memory[n] = fibnacci4(n - 1) + fibnacci4(n - 2)
    }
    return memory[n]
}

// 动态规划法则
function fibnacci5(n) {
    if (n < 1) {
        return n
    }
    let i = 1;let pre = 0;
    let current = 1;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current
        current = result
    }
    return result
}