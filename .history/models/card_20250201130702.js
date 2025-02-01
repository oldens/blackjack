const SUIT = {
  HEARTS: "HEARTS",
  DIAMONDS: "DIAMONDS",
  CLUBS: "CLUBS",
  SPADES: "SPADES",
};

class Card {
  constructor(value, suit, rank, link, style = "") {
    this.name = name;
    this.img = link;
    this.suit = suit;
    this.rank = rank;
    this.style = style;
    this.name=`${rank} of ${suit}`;
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

    const imgElement = document.createElement("img");
    imgElement.src = this.img;
    imgElement.alt = this.name;
    imgElement.style.height = "250px";
    cardContainer.appendChild(imgElement);

    // Remove or conditionally set display:none if you don't want it hidden by default.
    // cardContainer.style.display = "none";

    return cardContainer;
  }
}

export default Card;