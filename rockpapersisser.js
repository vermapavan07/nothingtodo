let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand(){
    let random = Math.floor(Math.random()*3);
    return random;
}
let value = getHand()

console.log(hands[value])
