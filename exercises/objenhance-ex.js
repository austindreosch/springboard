function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// 1.
let createInstructor = (firstName, lastName) => ({firstName, lastName})

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

// 2.
