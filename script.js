console.log("COMMENCING WAR");
//GOALS 😤
//1️⃣52 cards in deck 2 players and the players each get half(26) cards
//2️⃣objective is to play until one player has all 52 cards
//3️⃣players take turns playing the top card from their stacks(array/object?)[0] 0 index↩️
//4️⃣whoever card has higher value(COMPARED ==) takes both cards and (push) them to bottom of their stack(array/object?)[-1] LAST INDEX PUSH?
//5️⃣if its a TIE then its WAR, each player must add 3 cards from their stack(array/object?) face down and reveal the 4th card placed, whoever has the higher value on 4th card takes all the cards and add it to their stack, repeat(LOOP) this process until the game is done

//Card class to give the properties to define the cards
class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

//deck class making empty array to hold the deck and run the createDeck method by defualt
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        const card = new Card(suits[i], ranks[j], j + 2);
        this.cards.push(card);
      }
    }

    this.shuffle();
  }
  //this method is to randomize the cards in deck
  shuffle() {
    const cards = this.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}

//initilizing new Deck to use
const gameDeck = new Deck();
//check to see if its working should be Rahul made it lol
console.log(gameDeck);
//making player
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  //taking a array of cards as params and adding the card prop to players object using spread to add it to array
  addCards(cards) {
    this.cards.push(...cards);
  }
  //gonna use this to remove players first card and then return it
  playCard() {
    return this.cards.shift();
  }
  // and gonna use this to check how much cards a player has, well use this boolean later on to check for game over
  hasCards() {
    return this.cards.length > 0;
  }
}
//initilizing new players using our player class
const player1 = new Player("Bobby");
const player2 = new Player("Alice");

class Game {
  constructor(player1Name, player2Name, goal1, goal2) {
    this.deck = new Deck();
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.goal1 = goal1;
    this.goal2 = goal2;
  }

  play() {
    // Shuffle the deck
    this.deck.shuffle();

    // Deal the cards to the players
    this.dealCards();

    // Play the game until one player runs out of cards
    while (this.player1.hasCards() && this.player2.hasCards()) {
      // Player 1 plays a card
      const card1 = this.player1.playCard();
      console.log(`${this.player1.name} plays ${card1.rank} of ${card1.suit}`);

      // Player 2 plays a card
      const card2 = this.player2.playCard();
      console.log(`${this.player2.name} plays ${card2.rank} of ${card2.suit}`);

      // Gonna compare the cards <---- remember to define the funhction below
      if (compareCards(card1, card2) === 1) {
        console.log(`${this.player1.name} wins the round`);
        this.goal1();
      } else if (compareCards(card1, card2) === -1) {
        console.log(`${this.player2.name} wins the round`);
        this.goal2();
      } else {
        console.log("It's a tie");
      }
    }

    // Determine the winner of the game
    if (this.player1.hasCards()) {
      console.log(`${this.player1.name} wins the game!`);
    } else {
      console.log(`${this.player2.name} wins the game!`);
    }
  }

  dealCards() {
    // Deal the cards back and forth to our players
    for (let i = 0; i < this.deck.cards.length; i++) {
      if (i % 2 === 0) {
        this.player1.addCards([this.deck.cards[i]]);
      } else {
        this.player2.addCards([this.deck.cards[i]]);
      }
    }
  }
}
function compareCards(card1, card2) {
  // Compare the ranks(value) of the cards to determine whos winning
  if (card1.rank > card2.rank) {
    return 1;
  } else if (card1.rank < card2.rank) {
    return -1;
  } else {
    return 0;
  }
}
//wellness check to make sure the goals are actaully being accomplished
function goal1() {
  console.log("Goal 1 achieved");
}

function goal2() {
  console.log("Goal 2 achieved");
}
//initializing the actual game here
const game = new Game("Alice", "Bob", goal1, goal2);
game.play();
