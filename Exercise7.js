'use strict'
// Arrays in Javascript
const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19)
numbers.unshift(61)
numbers[1] = 12
numbers.splice(3, 1, 99)
console.log(numbers)
console.log(numbers[7])
// use for loop to display array

for (let index = 0; index !== numbers.length; index++) {
  console.log(numbers[index])
}
// use a Higher order function and a call back to  display the array
// The forEach method is  the highr=er order function and takes a callback function defined as
// function(element) {//... define function logic}
console.log('Using a higher order function')
numbers.forEach(function (element) {
  console.log(element)
})
