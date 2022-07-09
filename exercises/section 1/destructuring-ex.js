// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// // 1. 
// numPlanets === 8;
// yearNeptuneDiscovered === 1846;

// 2.
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;

//   numPlanets = 8;
//   discoveryYears = {yearNeptuneDiscovered: 1846, 
//     yearMarsDiscovered:1659}

// 3.
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }

// Your name is Alejandro and you like purple.
// Your name is Melissa and you like green.
// Your name is undefined and you like green.

// 4.
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// Maya
// Marisa
// Chi

// 5.
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// 6.
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// [10, 30, 20]

// 7.
let obj = {
    numbers: {a: 1, b: 2}
}
const {a,b} = obj.numbers;

// 8.
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]

// 9.
let raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});