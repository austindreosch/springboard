const { raw } = require('express');
const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const {convertNums} = require('./helpers');



app.get('/mean', function(req, res, next) {
    let stringNums = req.query.nums.split(',');
    let nums = convertNums(stringNums)

    let answer = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(answer)
})

app.get('/median', function(req, res, next) {
    let inputNumbers = req.query.nums.split(',');
    let nums = convertNums(stringNums)

    let answer = {
        operation: "median",
        result: findMedian(nums)
    }
    return res.send(answer)
})

app.get('/mode', function(req, res, next) {
    let inputNumbers = req.query.nums.split(',');
    let nums = convertNums(stringNums)

    let answer = {
        operation: "mode",
        result: findMode(nums)
    }
    return res.send(answer)
})




app.listen(3000, function(){
    console.log('App started. Port: 3000');
})