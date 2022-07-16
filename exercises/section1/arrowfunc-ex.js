/* Write an ES2015 Version */

let double = arr => arr.map((val) => val * 2) 

//Replace ALL functions with arrow functions:

let squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((square) => {square % 2 === 0})