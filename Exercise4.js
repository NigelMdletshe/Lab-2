'use strict'
// function to convert Fahrenheit to degrees
const convertToCelcius = function (a) {
  return (a - 32) * 5 / 9
}

const result = convertToCelcius(200)
console.log(result)

// Objects
const student = {
  name: 'Kwezi',
  studentNumber: 453528
}

console.log(student) // print the entire object

// access the object's properties
console.log(`${student.name}' student number is ${student.studentnumber}`)

// Add a new property to the student
const addAge = function (theStudent, age) {
  theStudent.age = age
}

addAge(student, 20)

console.log(student)
