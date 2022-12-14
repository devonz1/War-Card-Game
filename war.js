

const SUITS = ["♠", "♣", "♥", "♦"] /*this variable will hold our  array 
 containing the suits for all of our cards*/
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "J", "Q", "K"]


export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  } /* this keyword is refering to the object were using
  in this case were referencing the cards object in deck class. cards in
  this constructor will hold all of our cards  this .cards will represent 
  the entire deck of cards*/



  get numberOfCards() {
    return this.cards.length
  }
  /*this will return a diffrent card based on the number of cards within the deck*/

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) { /*this loop iterate through our deck of cars and will start from
    the back  of the deck flipping each card until the front . and we will take 
    whatever card that we are currently using and flipping it with a new card thats earlier in the deck that hasn't been flipped*/
      const newIndex = Math.floor(Math.random() * (i + 1)) /* this will give us a placement in
    our deck of cards that hasn't been flipped yet based on the index within the loop. so if the index is at 28 it 
    will gives a card within the deck between 0 and 28 which is a card that hasn't been flipped yet.  */
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue /* SO what where doing here is looping through
    all of the cards in our deck and swapping them with a new card that way
    we get a random shuffle each time */
    }
  }
}




class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  get color() {
    return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
  }

  getHTML() {
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value}${this.suit}`
    return cardDiv
  } /* this function allows us to get the html for all of our Cards*/
}

function freshDeck() {
  return SUITS.flatMap(suit => {   /*this flatmap method combines our arrays and gives each card
  in freshdeck a suit and value and combines both arrays into one */
    return VALUES.map(value => {
      return new Card(suit, value) /* this is the new card object that will return the suit and 
    value of each card in our freshdeck function*/
    })
  })
}  /* this fucnction will create a new deck of cards with all 52 cards 
one card for each suit and value combination*/


