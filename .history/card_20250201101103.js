const SUIT = {
  HEARTS: "HEARTS",
  DIAMONDS: "DIAMONDS",
  CLUBS: "CLUBS",
  SPADES: "SPADES",
};

class Card {
  constructor(name, suit, rank, link, style = "") {
    this.img = link;
    this.suit = suit;
    this.rank = rank;
    this.style = style;
    this.html = this.createCardsContainer();
  }

  get name() {
    return `${this.rank} of ${this.suit}`;
  }

  show() {
    this.html.style.display = "block";
  }

  hide() {
    this.html.style.display = "none";
  }

  createCardsContainer() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    if (this.style) {
      cardContainer.style.cssText = this.style;
    }

    const imgElement = document.createElement("img");
    imgElement.src = this.img;
    imgElement.alt = this.name;
    cardContainer.appendChild(imgElement);
    cardContainer.style.display = "none";
    return cardContainer;
  }
}
