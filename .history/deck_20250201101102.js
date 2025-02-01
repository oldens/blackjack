class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  importFromJSON(json) {
    this.cards = json.map((card) => new Card(card.name, card.suit, card.rank, card.img, card.style));
  }

  drawCard() {
    return this.cards.pop();
  }
}