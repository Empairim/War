console.log("COMMENCING WAR");
//GOALS 😤
//1️⃣52 cards in deck 2 players and the players each get half(26) cards
//2️⃣objective is to play until one player has all 52 cards
//3️⃣players take turns playing the top card from their stacks(array/object?)[0] 0 index↩️
//4️⃣whoever card has higher value(COMPARED ==) takes both cards and (push) them to bottom of their stack(array/object?)[-1] LAST INDEX PUSH?
//5️⃣if its a TIE then its WAR, each player must add 3 cards from their stack(array/object?) face down and reveal the 4th card placed, whoever has the higher value on 4th card takes all the cards and add it to their stack, repeat(LOOP) this process until the game is done

class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

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

  shuffle() {
    const cards = this.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}
const gameDeck = new Deck();
console.log(gameDeck);
