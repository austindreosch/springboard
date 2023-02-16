

function convertNums(stringNums){
    let result = [];

    for (let i = 0; i < inputNums.length; i++){
        let stringToNumber = Number(inputNums[i]);
        result.push(stringToNumber);
    }
    return result;
}

function findMean(nums){
    return nums.reduce(function (acc, cur){
        return acc + cur;
    }) / nums.length;
}
function findMedian(nums){
    nums.sort(function(a,b){
        return a-b;
    })

    let middle = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0){
        return (nums[middle - 1] + nums[middle) / 2
    } else {
        return nums[middle]
    }

}
function findMode(nums){
    let counts = {}
    let max = 0;

    nums.forEach(function(e){
        if (counts[e] === undefined){
            counts[e] = 0;
        }
        counts[e] += 1;

        if(counts[e] > max){
            max = counts[e]
        }
    });
    return max;

}