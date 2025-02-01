class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  importFromJSON(json) {
    this.cards = json.map((card) => new Card(
      `${card.rank} of ${card.suit}`, // name derived from card rank and suit
      card.suit,
      card.rank,
      card.file,     // using the file property as the image link
      ""             // default style as empty string
    ));
  }

  drawCard() {
    return this.cards.pop();
  }
}