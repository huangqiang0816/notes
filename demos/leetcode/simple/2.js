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