'use strict'
// Exercise 5

const course = {
  course_code: 'ELEN4010'
}

// console.log(course.course_code)
const addYearOffered = function (courseObject) {
  const extractYear = courseObject.course_code.slice(4, 6)
  console.log(extractYear)
  let YOS = ''
  if (extractYear.includes('10')) { YOS = '1' }
  if (extractYear.includes('20')) { YOS = '2' }
  if (extractYear.includes('30')) { YOS = '3' }
  if (extractYear.includes('40')) { YOS = '4' }
  courseObject.YOS = YOS
  return YOS
}

// console.log('Adding a year of study in the object')
// addYearOffered(course)
// console.log(course)

console.log('outputting the of which the course is  offered')
const OutputYearOffers = function (_course) {
  const yearOfStudy = addYearOffered(_course)
  console.log(`${course.course_code} is offered in year ${yearOfStudy}.`)
}

OutputYearOffers(course)

// Object refence are passed by  value
const setStudentObjectToEmptyObject = function (theStudent) {
  theStudent = {}
}
// NB: Changing a property of the rather than reassigning the object will reflect outside the function

setStudentObjectToEmptyObject(course) // Has not  effect on the course object
console.log(course)

// Adding methid to objects
const student = {
  name: 'Nigel',
  studentNumber: 1597151,
  getSummary: function () {
    return `${this.name}' student number is ${this.studentNumber}`
  }
}

const myString = student.getSummary()
console.log(myString)
