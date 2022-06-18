function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// 1.
let createInstructor = (firstName, lastName) => ({firstName, lastName})

// Computed Property Names

var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

// 2.
let favoriteNumber = 42;
let instructor = {
  firstName : "Austin",
  [favoriteNumber]: "That is my favorite!"
}

// Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
// 3.
let instructor = {
  firstName: "Colt",
  sayHi(){return "Hi!";},
  sayBye(){return this.firstName + " says bye!";}
}

function animal(species, verb, noise){
  return {
    species, 
    [verb](){
      return noise;
    }
  }
}
