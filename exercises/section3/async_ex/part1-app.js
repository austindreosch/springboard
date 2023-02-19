const express = require("express");
const app = express();
const axios = require('axios');

async function getNumberFact(num){
  let call = `http://numbersapi.com/${num}/?json`;
  let response = await axios.get(call);
  return response.data.text;
}

async function getNumberFacts(nums){
    let call = `http://numbersapi.com/${nums.join(',')}/?json`;
    let response = await axios.get(call);
    let facts = Object.values(response.data).map((fact) => fact.text);
    return facts;
}


getNumberFact(5);





app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
