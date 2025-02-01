import Card from './card.js';

class Deck {
  constructor(deckJSON) {
    this.cards = this.importFromJSON(deckJSON);
  }

  importFromJSON(json) {
    this.cards = json.map((card) => new Card(
      `${card.rank} of ${card.suit}`,
      card.suit,
      card.rank,
      card.file,     
      ""            
    ));
  }

  drawCard() {
    return this.cards.pop();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

}

export default Deck;