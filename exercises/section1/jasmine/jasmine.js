function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
//   Refactor it to use the rest operator & an arrow function:
function displayArguments(...restOfArgs){
    console.log("The first argument is", restOfArgs[0])
    return `You passed in ${restOfArgs.length} arguments!`
  }
// 1.

function filterOutOdds(...nums){
    return nums.filter(function(num) {
        return num % 2 === 0;
      })
}

let filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)

// 2. findMin
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

function findMin(...nums){
    return nums.reduce(function(accum, next){
        if(accum < next){
            return accum;
        }
        return next;
    })
}

let findMin = (...nums) => Math.min(...nums)

// 3. mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
//const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// 4. doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args){
    return [...arr, ...args.map(function(arg){
        return arg * 2;
    })]
}

let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg *2)]

// 5. Slice and Dice 
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}

let removeRandom = (items) => {
    let random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

let extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    //spread obj + {key : val}
    return {...obj, [key]: val}
}

let addKeyVal = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

let update = (obj, key, val) => ({...obj, [key]: val});