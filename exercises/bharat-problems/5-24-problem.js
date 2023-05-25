let nums = [2,7,11,15];

// step 1
// there is no solution? return (-1,-1)
// ------------------------------------

function targetSum(nums, target) {

    // loop through the array,
    // 
    let solution = []

    for (let i = 0; i < nums.length; i++) {

        for (let j = i+1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target){
                solution = [i, j];
                return solution;
            }
        }

    }

    if (solution.length === 0){
        return [-1,-1]
    }
}


targetSum(nums, 23);





// step 2
// give me time complexity of this solution 
//       //        O(n²) quadratic       //
// give me solution where time complexity is less
// --------------------------------------------------------------------------------------



function targetSum2(nums, target) {

    // loop through the array,
    // 
    let solution = []
    let checked = {}

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i]

        if (complement in checked){
            solution = [checked[complement], i];
            return solution;
        }
        
        // set checked object with key:value of currentNum: i]
        checked[nums[i]] = i;
    }

    if (solution.length === 0){
        return [-1,-1]
    }
}


targetSum2(nums, 23);

// time complexity is now O(n) by utilizing object hash maps



// what if there are more than one possible solutions? return an array of those pairs
// -------------------------------------------------------------------------------

function targetSum3(nums, target) {

    // loop through the array,
    // 
    let solutions = []
    let checked = {}

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i]

        if (complement in checked){
            solutions.push([checked[complement], i]);
        }
        
        // set checked object with key:value of currentNum:i]
        if (!(nums[i] in checked)){
            checked[nums[i]] = i;
        }
    }

    if (solutions.length === 0){
        return [-1,-1]
    }
    else {
        return solutions;
    }
}


targetSum3(nums, 23);
