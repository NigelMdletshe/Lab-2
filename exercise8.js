// Exercise 8
// Function that applies an arbitrary function to each array element
// and places the result in a new array
const myArray = [1, 2, 3, 4, 5.5]

const map = function (functiontoApply, Array) {
  let _index = 0
  for (let index = 0; index < Array.length; ++index) {
    Array[_index] = functiontoApply(myArray[index])
    _index++
  }
}
let array = []
console.log('Abritrary function that squares every element')
// function that squares contents of array
function squareContents (element) {
  return (element * element)
}

map(squareContents, array)
array.forEach(function (element) {
  console.log(element)
})

// clear array
array = []

console.log('Abritrary function that adds one to every element')

// Function that adds one to every array element
function AddOne (element) {
  return (element + 1)
}

map(AddOne, array)

array.forEach(function (element) {
  console.log(element)
})

array = []
// using map method
array = myArray.map(function (element) {
  return (element * element)
})

console.log(array)

// indexof cannot be used o compare objects as seen below
const electives = [
  {
    courseCode: 'ELEN4010',
    addYearOffered: 4
  },
  {
    courseCode: 'ELEN4001',
    addYearOffered: 4
  },
  {
    courseCode: 'ELEN4020',
    addYearOffered: 4
  }
]

console.log(electives.indexOf({ // no element found (return -1)
  courseCode: 'elen4001',
  addYearOffered: 4

}))

// Further illustration
// Below, the empty objects' properties are not compared
// their reference are compared, thus  false is returned
// console.log({} === {})

// Now, we compare equal object reference
const object1 = {}
const object2 = object1

// Returns true since the refence of the two objects are equal
console.log(object1 === object2)

// Need to search array of object using indexof method
console.log(electives.findIndex(function (element) { // prints 1, index of the object
  return element.courseCode === 'ELEN4010' && element.yearOffered === 4
}))
