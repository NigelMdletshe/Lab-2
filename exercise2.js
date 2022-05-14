'use strict' // must always be included.
let sum = 0// only declare variables as const.
for (let i = 0; i < 9; i++) {
  sum += 1
}
console.log(sum)
if (sum % 2 === 0) console.log('Sum is even')
else console.log('Sum is odd')

const a = 5
const b = 10
// an ordinary string
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.')
// using a template string - note the back-ticks
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`)
