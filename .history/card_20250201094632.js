const SUIT = { HEARTS: 'HEARTS', DIAMONDS: 'DIAMONDS', CLUBS: 'CLUBS', SPADES: 'SPADES' };


class Card {
  constructor(name, suit, rank, link, style='') {  
    this.img=link;
    this.suit=this.suit;
    this.rank=this.rank;
    this.style=this.style;
    this.html=this.createCardsContainer();
  }

  get name() {
    return `${this.rank} of ${this.suit}`;
  }

  createCardsContainer() {
    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = `<img src="${this.img}" alt="${this.name}" />`;
    cardContainer.classList.add("card-container");
    cardContainer.style = this.style;
    cardContainer.style.display="hidden";
    return cardContainer;
  }
}
