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
      card.value, 
      card.suit,
      card.rank,
      `./cards_img/${card.file}`,   
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