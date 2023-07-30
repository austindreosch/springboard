// add whatever parameters you deem necessary
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// Examples:
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)

function countPairs(numArr, num) {
    // sort array then two pointers
    numArr.sort((a, b) => a - b);
    let pairCount = 0
    let left = 0;
    let right = numArr.length - 1;
    while (left < right){
        const currPair = numArr[left] + numArr[right];
        if (currPair === num){
            pairCount++;
            left++;
            right--;
        } else if ( currPair < num ){
            left++;
        } else {
            right --;
        }
    }
    return pairCount;
}
