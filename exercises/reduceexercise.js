/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(accum, nextName){ 
        accum.push(nextName[key]); //push each object's value with the given key to the new array
        return accum; //return the new array
    },[]) //start with empty array
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const vowels = "aeiou"
    return str.split('').reduce(function(accum, nextLetter){ //splitting the str by index
        let letter = nextLetter.toLowerCase();
        if(vowels.indexOf(letter) !== -1){ //if current index(letter) is a vowel
            
            if(accum[letter]){//if current index(vowel) is already defined
                accum[letter]++; //++ on the value of the vowel
            }
            else { //if current index is undefined
                accum[letter] = 1; //create new key for vowel and set value to 1
            }
        }
        return accum;
    }, {})
    
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [
        {name: 'Elie'}, 
        {name: 'Tim'}, 
        {name: 'Matt'}, 
        {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    //add key and value to each object in the array
    return arr.reduce(function(accum,nextObject,index){ 
        accum[index][key] = value; //for every object in the array, the key is added and set to value
        return accum; //return the updated array
    },arr);
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {

    //return an array with two arrays inside of it
    //array.push

    return arr.reduce(function(accum, next){    
        if(callback(next)){ //if next is true, put it in index 0
           accum[0].push(next);
        }
        else {
            accum[1].push(next); //if false, put it in index 1
        }
        return accum;

    },[[],[]])//two empty arrays for true and false
}
