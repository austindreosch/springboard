const express = require("express");
const app = express();
const axios = require('axios');

async function draw(){
  let response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
  let value = response.data.cards[0].value;
  let suit = response.data.cards[0].value;
  console.log(`${value} of ${suit}`);
}

draw();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
