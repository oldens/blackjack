class Deck {
  constructor(cards) {
    this.cards = cards;
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
}