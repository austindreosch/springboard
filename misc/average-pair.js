// add whatever parameters you deem necessary
function averagePair(sortedInts, targetAvg) {
    let left = 0;
    let right = sortedInts.length - 1;

    while (left < right){
        const currPair = sortedInts[left] + sortedInts[right];
        if (currPair / 2 === targetAvg){
            return true;
        } else if (currPair / 2 < targetAvg) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
