// add whatever parameters you deem necessary

// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.


// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(letters, message) {
    // loop over letters and make hash map
    const freqCounter = {}
    for (let letter of letters){
        freqCounter[letter] = (freqCounter[letter] + 1) || 1
    }
    // then loop over message and decrement based on finding letters
    for (let char of message){
        // if u ever see 0 or not in hash map, return false
        if(freqCounter[char] > 0){
            freqCounter[char]--;
        } else{
            return false
        }
    }
    return true;
}

constructNote('aa', 'abc')