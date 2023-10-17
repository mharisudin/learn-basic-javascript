/*
    Learn Function
 */

// 1. New Function
const sum = new Function(
    console.log('ini adalah function')
)

// 2. Standard Function
function sum2(x, y) {
    console.log(x + y)
}

// 3. Arrow Function
const sum3 = (x, y) => {
    console.log(x + y)
}

// sum3(2, 3)