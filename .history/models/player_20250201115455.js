class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.handContainer = this.createHandContainer();
        this.id='player'+Symbol().toString().slice(7);
    }

    createHandContainer() {
        const handContainer = document.createElement("div");
        handContainer.classList.add("hand-container");
        handContainer.id = this.id;
        return handContainer;
    }

    addCard(card) {
        this.hand.push(card);
        this.handContainer.appendChild(card.html);
        card.show();
    }
}

export default Player;