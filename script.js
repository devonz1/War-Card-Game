import Deck from "./war.js"

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14

}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')
const lblScore = document.querySelector('.lblScore')


let playerDeck, computerDeck, inRound, stop

document.addEventListener('click', () => {
    if (stop) {
        startGame()
        return
    }
    if (inRound) {
        cleanBeforeRound()
    } else {
        flipCards()
    }
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)/* this will take the number of cards in our
    deck and divide them by two and we ush.ceil in case the deck midpoint comes out to 
    a decimal math.ceil will round up the card amount to a equal number so there is no error. we have 52
    cards we divide the midpoint of the cards so deck.number of cards will be dividing the 52 cards by 2 so
    each player gets 26 cards.*/
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint)) /*this will give our player 
    the first 26 cards in the deck from the start of the deck until the midpoint of the deck*/
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards)) /* this  will give the computer 
    the remaining 26 cards within the deck starting from the middle of the deck until the end of the deck*/
    inRound = false

    stop = false
    cleanBeforeRound()
}

function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    text.innerText = ""


    updateDeckcount()
}

 


function flipCards() {
    inRound = true
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    updateDeckcount()

    if (isRoundWinner(playerCard, computerCard)) {
        text.innerText = "Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, playerCard)) {
        text.innerText = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }
    if (isGameOver(playerDeck)) {
        text.innerText = 'You lose!!'
        stop = true
    } else if (isGameOver(computerDeck)) {
        text.innerText = "You Win!"
        stop = true
    }

 
   }


 var score= 0;


function updateDeckcount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
      
}

 



function isGameOver(deck) {
    return deck.numberOfCards === 0
}
