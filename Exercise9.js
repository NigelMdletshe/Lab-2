'use strict'
// Exercise 9
// This is a function that deletes  a student from the array of students
const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const modifiedArray = deleteStudent({
  name: 'Jade',
  studentNumber: 1597151,
  yearOfStudy: 4
}, students)

function deleteStudent (studentDetails, studentArray) {
  let found = false
  studentArray.findIndex(function (object, index) {
    if (object.name === studentDetails.yearOfStudy) { found = true }

    if (found) { studentArray.splice(index, 1) }

    return (object.name === studentDetails.name && object.studentNumber === studentDetails.studentNumber &&
        object.yearOfStudy === studentDetails.yearOfStudy) // this will return the index of the searched element, weird l know
  })
  return studentArray
}

// The  two are the same since arrays  are passed by reference(think of pointers in c++)
console.log(modifiedArray)
// console.log(students)

// Test for a student that is not found
modifiedArray = deleteStudent({
  name: 'Nigel',
  studentNumber: 1597151,
  yearOfStudy: 4
}, students)

// student array should be unchanged
