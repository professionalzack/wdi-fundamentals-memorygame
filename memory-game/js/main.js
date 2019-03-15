let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] == cardsInPlay[1]) {
        alert("you found a match!")
    }else{
        alert("sorry, try again")
    }
}