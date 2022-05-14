'use strict' // always remember to include

let a = 'hello'
console.log(`a= ${a}, "a" is ${typeof a}`)
a = 5
a += 2

console.log(`a = ${a}, "a" is ${typeof a}`)
a = true
console.log(`a= ${a}, "a" is ${typeof a}`)

const add = function (a, b) { // function expression assigned to add
  return a + b
}

const result = add(2, 3) // execute the function
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4)) // execute add again
