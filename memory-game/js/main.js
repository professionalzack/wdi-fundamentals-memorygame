let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let checkForMatch = function() {
    if (cardsInPlay[0] == cardsInPlay[1]) {
        console.log("you found a match!")
    }else{
        console.log("sorry, try again")
    }
}

let flipCard = function(cardId) {
    console.log(`user flipped ${cards[cardId]}`);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
        // cardsInPlay = [];
    }
}