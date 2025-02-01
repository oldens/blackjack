class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.handContainer = this.createHandContainer();
        this.id='player'+Symbol().toString().slice(7);  // Generate a unique id
    }

    createHandContainer() {
        const handContainer = document.createElement("div");
        handContainer.classList.add("hand-container");
        handContainer.style.display = "flex";
        handContainer.style.flexDirection = "row";
        handContainer.id = this.id;
        return handContainer;
    }


    addCard(card) {
        this.hand.push(card);
        this.handContainer.appendChild(card.html);
        this.score += card.rank;
        card.show();
    }

    reset() {
        this.hand = [];
        this.score = 0;
        this.handContainer.innerHTML = "";
    }

   
}

export default Player;