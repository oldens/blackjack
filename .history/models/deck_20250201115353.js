import Card from './card.js';

class Deck {
  constructor(jsonFile) {
    this.cards = [];
    // Load cards from JSON file if provided
    if (jsonFile) {
      fetch(jsonFile)
        .then((response) => response.json())
        .then((json) => this.importFromJSON(json))
        .catch((error) => console.error('Error loading deck:', error));
    }
  }

  importFromJSON(json) {
    this.cards = json.map((card) => new Card(
      `${card.rank} of ${card.suit}`, // Card name
      card.suit,
      card.rank,
      `./cards_img/${card.file}`,    // Use card file as image link
      ""            // Default style
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